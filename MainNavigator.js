import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailMovieScreen from './src/screens/DetailMovieScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailMovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
