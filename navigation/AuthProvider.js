import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {ToastAndroid} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            ToastAndroid.show(e.message, ToastAndroid.SHORT);
          }
        },
        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = await auth.GoogleAuthProvider.credential(
              idToken,
            );
            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
          } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              console.log('error occured SIGN_IN_CANCELLED');
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              console.log('error occured IN_PROGRESS');
              // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              console.log('error occured PLAY_SERVICES_NOT_AVAILABLE');
            } else {
              console.log(error);
              console.log('error occured unknow error');
            }
          }
        },
        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
          } catch (error) {
            console.log({error});
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            ToastAndroid.show(e.message, ToastAndroid.SHORT);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            ToastAndroid.show(e.message, ToastAndroid.SHORT);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
