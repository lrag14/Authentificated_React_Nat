import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../Screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen.js';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import NewPasswordScreen from '../Screens/NewPasswordScreen copy/NewPasswordScreen.js';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen
               name="ForgotPassword"
               component={ForgotPasswordScreen}
            />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Navigation;
