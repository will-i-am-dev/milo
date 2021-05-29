import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

import AntDesign from 'react-native-vector-icons/FontAwesome';

const FormInput = ({
  labelValue,
  placeholderText,
  iconType,
  secureTextEntry,
  pass,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        secureTextEntry={labelValue === undefined ? false : !showPassword}
        placeholderStyle={styles.input}
        {...props}
      />

      {pass && (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconStyleLeft}>
          <AntDesign
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            color={'#D5D8DC'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  iconStyleLeft: {
    padding: 5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 8,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
