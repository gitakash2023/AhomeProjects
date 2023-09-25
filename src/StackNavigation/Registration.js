import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleInputChange = (key, value) => {
    setUserData({...userData, [key]: value});
  };
  const handleRegistration = async () => {
    try {
      // Send the userData object to the backend API
      const response = await fetch('https://your-backend-api.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Handle the response from the server
      if (response.ok) {
        // Registration was successful
        const data = await response.json();
        console.log('Registration successful:', data);
      } else {
        // Handle other possible response status codes (e.g., validation errors)
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('An error occurred during registration:', error);
    }
  };
  const navigation = useNavigation();
  //
  const onPressToNavigateLogin = () => {
    navigation.navigate('Login');
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
          Create New Account
        </Text>
      </View>
      <TextInput
        placeholder=" Enter Email"
        value={userData.email}
        onChangeText={text => handleInputChange('email', text)}
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 50,
        }}
      />
      <TextInput
        placeholder="password"
        value={userData.password}
        onChangeText={text => handleInputChange('password', text)}
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
        }}
      />
      <TextInput
        placeholder="Confirm password"
        value={userData.confirmPassword}
        onChangeText={text => handleInputChange('confirmPassword', text)}
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
        }}
      />
      <TouchableOpacity
        onPress={handleRegistration}
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
          Signup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressToNavigateLogin}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            color: 'black',
            fontSize: 24,
            textDecorationLine: 'underline ',
          }}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
