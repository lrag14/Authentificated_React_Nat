import {
   View,
   Text,
   StyleSheet,
   Image,
   useWindowDimensions,
   ScrollView,
} from 'react-native';
import React, { useState } from 'react';

/////////// ASSETS /////////////////
import logo from '../../../assets/images/logo.png';

/////////////////////
import CustomInput from '../../../src/components/CustomInput/CustomInput.js';
import CustumButton from '../../../src/components/CustomButton/CustumButton.js';
import SocialSignInButtons from '../../../components/SocialSignInButtons/SocialSignInButtons.js';

import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const { height } = useWindowDimensions();
   const navigation = useNavigation();
   ///////////////////////////////////////
   const onSingInPressed = () => {
      navigation.navigate('Home');
   };
   const onForgotPasswordPressed = () => {
      navigation.navigate('ForgotPassword');
   };

   const onSignUpPress = () => {
      navigation.navigate('SignUp');
   };
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.root}>
            <Image
               source={logo}
               style={[styles.logo, { height: height * 0.3 }]}
               resizeMode="contain"
            />
            <CustomInput
               placeholder="Username"
               value={username}
               setValue={setUsername}
            />
            <CustomInput
               placeholder="Password"
               value={password}
               setValue={setPassword}
               secureTextEntry
            />
            <CustumButton text="Sign in" onPress={onSingInPressed} />
            <CustumButton
               text="Forgot password ?"
               onPress={onForgotPasswordPressed}
               type={'TERTIARY'}
            />
            <SocialSignInButtons />

            <CustumButton
               text="Don't have an account ? Create one"
               onPress={onSignUpPress}
               type={'TERTIARY'}
            />
         </View>
      </ScrollView>
   );
};
const styles = StyleSheet.create({
   root: {
      flex: 1,
      alignIntem: 'center',
      padding: 30,
   },
   logo: {
      maxWidth: 300,
      maxHeight: 200,
   },
});
export default SignInScreen;
