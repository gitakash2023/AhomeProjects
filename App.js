import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/BottomNavigator/BottomTabs';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </>
  );
};
export default App;