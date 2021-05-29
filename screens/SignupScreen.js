import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
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
import {windowHeight} from '../utils/Dimentions';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);
  return (
    <GuessLayout>
      <TopContainer>
        <Text style={styles.text}>Crear una Cuenta</Text>
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
        <FormInput
          labelValue={confirmPassword}
          onChangeText={userPassword => setConfirmPassword(userPassword)}
          placeholderText="Confirmar Contraseña"
          iconType="lock"
          pass
        />
        <FormButton
          buttonTitle="Registrarme"
          onPress={() => {
            if (password !== confirmPassword) {
              return ToastAndroid.show(
                'Las contraseñas no son iguales',
                ToastAndroid.SHORT,
              );
            }
            if (!email || !password || !confirmPassword) {
              return ToastAndroid.show(
                'Debe llenar todos los campos',
                ToastAndroid.SHORT,
              );
            }
            return register(email, password);
          }}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            Al registrarse, confirma que acepta nuestros{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terminos de servicio
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> y la </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Politica de privacidad.
          </Text>
        </View>
      </TopContainer>
      <BottomContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>¿Ya tienes una cuenta?</Text>
        </TouchableOpacity>
      </BottomContainer>
    </GuessLayout>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4b4c54',
  },

  navButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 75,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
