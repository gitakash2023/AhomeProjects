import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  //
  const onPressToNavigateRegistration = () => {
    navigation.navigate('Registration');
  };
  return (
    <>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 24,
            color: 'black',
            marginTop: 50,
          }}>
          Login
        </Text>
      </View>
      <TextInput
        placeholder="Enter email"
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 50,
        }}
      />
      <TextInput
        placeholder="Enter  password"
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
        }}
      />
      <TouchableOpacity
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
          height: 50,
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 9,
            color: 'white',
            fontSize: 24,
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressToNavigateRegistration}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            color: 'black',
            fontSize: 24,
            textDecorationLine:"underline "
          }}>
          Not have an account? Sign up here
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
