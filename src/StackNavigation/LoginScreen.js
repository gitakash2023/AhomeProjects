// LoginScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const handleLogin = async () => {
    try {
      await loginSchema.validate(loginData);
      // Perform login logic (API call, authentication, etc.)

      // Navigate to the home screen after successful login
      navigation.navigate('BottomTabs');
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert('Validation Error', error.message);
      } else {
        Alert.alert(
          'Login Error',
          'Failed to login. Please check your credentials.',
        );
      }
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={text => setLoginData({...loginData, email: text})}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setLoginData({...loginData, password: text})}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
