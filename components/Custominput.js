import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';


import AntDesign from 'react-native-vector-icons/AntDesign';

const Custominput = ({labelValue, placeholderText, iconType, ...rest}) => {
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
        {...rest}
      />
    </View>
  );
};

export default Custominput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: Dimensions.get("window").height/20,
    marginBottom: 10,
    width: '100%',
    height: Dimensions.get("window").height / 15,
    borderColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'black',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
  
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: Dimensions.get("window").width / 1.5,
    height: Dimensions.get("window").height / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});