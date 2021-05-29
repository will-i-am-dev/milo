import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const FormButton = ({buttonTitle, ...props}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 40,
    height: windowHeight / 15,
    backgroundColor: '#3b3b3f',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    borderTopRightRadius: 0,
  },
  buttonText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
