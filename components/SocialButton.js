import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  width,
  ...props
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor, width}]}
      {...props}>
      <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: windowHeight / 15,
    padding: 5,
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 0,
  },
  icon: {
    fontWeight: 'bold',
  },
});
