import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyOrders from './DrawerScreens/MyOrders';
import LikedProducts from './DrawerScreens/LikedProducts';
import Cart from './DrawerScreens/Cart';
import PopularProducts from './DrawerScreens/PopularProducts';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Order" component={MyOrders} />
      <Drawer.Screen name="Liked Products" component={LikedProducts} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Popular Products" component={PopularProducts} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
