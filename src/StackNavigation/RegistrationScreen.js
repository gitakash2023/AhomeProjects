import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  // State to store user registration data
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Validation schema using yup
  const registrationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Function to handle form submission
  const handleRegistration = async () => {
    try {
      // Validate form data against the schema
      await registrationSchema.validate(registrationData);

      // API endpoint URL
      const apiEndpoint = 'https://example.com/api/register';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      // Handle success, e.g., navigate to Login page
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration failed:', error);

      // Handle validation errors
      if (error instanceof yup.ValidationError) {
        Alert.alert('Validation Error', error.message);
      } else {
        // Handle other errors
        Alert.alert(
          'Registration Error',
          'Failed to register. Please try again.',
        );
      }
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        onChangeText={text =>
          setRegistrationData({...registrationData, name: text})
        }
      />
      <TextInput
        placeholder="Email"
        onChangeText={text =>
          setRegistrationData({...registrationData, email: text})
        }
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text =>
          setRegistrationData({...registrationData, password: text})
        }
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;
