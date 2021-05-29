import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return <View style={{...styles.dots, backgroundColor}} />;
};

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.menuContainer} {...props}>
    <Text style={styles.menuText}>Omitir</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.menuContainer} {...props}>
    <Text style={styles.menuText}>Siguiente</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.menuContainer} {...props}>
    <Text style={styles.menuText}>Hecho!</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#79c4b8',
          color: 'black',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Inicio',
          subtitle: 'Aprender algo nuevo es un todo reto...',
        },
        {
          backgroundColor: '#f2d181',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Descubre',
          subtitle:
            'Practica hablando, escribiendo y conociendo gente nueva...',
        },
        {
          backgroundColor: '#c1c6df',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Meta',
          subtitle: 'Superarse dia a dia...',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    width: 6,
    height: 6,
    marginHorizontal: 3,
  },
  menuText: {
    fontSize: 17,
  },
  menuContainer: {
    marginHorizontal: 10,
  },
});
