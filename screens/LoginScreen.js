import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {
  GuessLayout,
  TopContainer,
  BottomContainer,
} from '../components/Commons/GuessLayout';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <GuessLayout>
      <TopContainer>
        <Image
          source={require('../assets/rn-social-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.textTitle}>Milo</Text>

        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Correo"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Contraseña"
          iconType="lock"
          pass
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonTextOlv}>¿Olvidaste la contraseña?</Text>
        </TouchableOpacity>
        <FormButton
          buttonTitle="Ingresar"
          onPress={() => {
            if (!email || !password) {
              return ToastAndroid.show(
                'Debe llenar todos los campos',
                ToastAndroid.SHORT,
              );
            }
            login(email, password);
          }}
        />

        {Platform.OS === 'android' ? (
          <View style={styles.containerSocial}>
            <Text style={styles.navButtonTextSocial}>Ingresar con:</Text>
            <SocialButton
              width={70}
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => fbLogin()}
            />
            <SocialButton
              width={70}
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => googleLogin()}
            />
          </View>
        ) : null}
      </TopContainer>
      <BottomContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>¿No tienes una cuenta?</Text>
        </TouchableOpacity>
      </BottomContainer>
    </GuessLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerSocial: {
    marginTop: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  textTitle: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 35,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4b4c54',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    width: '100%',
    textAlign: 'left',
    marginTop: 1,
  },
  navButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
  navButtonTextOlv: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4b4c54',
    fontFamily: 'Lato-Regular',
  },
  navButtonTextSocial: {
    fontSize: 19,
    fontWeight: '500',
    color: '#4b4c54',
    fontFamily: 'Lato-Regular',
  },
});
