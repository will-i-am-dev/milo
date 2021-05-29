import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimentions';

export const GuessLayout = ({children, props}) => {
  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#7f6ecc', '#6c96f3']}
      {...props}>
      {children}
    </LinearGradient>
  );
};

export const TopContainer = ({children, props}) => {
  return (
    <View style={styles.topContainer} {...props}>
      {children}
    </View>
  );
};

export const BottomContainer = ({children, props}) => {
  return (
    <View style={styles.bottomContainer} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    minHeight: windowHeight,
    paddingBottom: 5,
  },
  topContainer: {
    backgroundColor: '#ffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: windowWidth,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  bottomContainer: {
    marginVertical: 10,
    minHeight: windowHeight / 15,
    maxHeight: windowHeight / 15,
  },
});
