import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  //
  const onPressToNavigateRegistration = () => {
    navigation.navigate('Registration');
  };
  const handleLogin = () => {
    navigation.navigate('BottomTabs');
    // try {
    //   const response = await fetch('', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(loginData), // Send the loginData object
    //   });

    //   if (response.ok) {
    //     // Login was successful
    //     const data = await response.json();
    //     console.log('Login successful:', data);
    //     // Redirect to the home screen

    //   } else {
    //     console.error('Login failed');
    //   }
    // } catch (error) {
    //   console.error('An error occurred during login:', error);
    // }
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
        value={loginData.email}
        onChangeText={text => setLoginData({...loginData, email: text})}
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
        value={loginData.password}
        onChangeText={text => setLoginData({...loginData, password: text})}
        style={{
          width: '85%',
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
        }}
      />
      <TouchableOpacity
        onPress={handleLogin}
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
            textDecorationLine: 'underline ',
          }}>
          Not have an account? Sign up here
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
