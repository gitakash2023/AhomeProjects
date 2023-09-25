import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Image
        source={require('../Images/AKSTECHNO.png')}
        style={{width: 400, height: 350}}
      />
    </View>
  );
};

export default Splash;
