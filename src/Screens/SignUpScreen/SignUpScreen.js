import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

/////////// ASSETS ////////////////

/////////////////////
import CustomInput from '../../../src/components/CustomInput/CustomInput.js';
import CustumButton from '../../../src/components/CustomButton/CustumButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js';

const SignUpScreen = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordReapeat, setPasswordReapeat] = useState('');

   const navigation = useNavigation();

   ///////////////////////////////////////
   const onRegisterPressed = () => {
      navigation.navigate('ConfirmEmail');
   };
   const onTermOfUse = () => {
      console.warn('TearmOfUse');
   };
   const onPrivatePolicy = () => {
      console.warn('pricatePolicy');
   };

   const onSignInPress = () => {
      navigation.navigate('SignIn');
   };
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput
               placeholder="Username"
               value={username}
               setValue={setUsername}
            />
            <CustomInput
               placeholder="Email"
               value={email}
               setValue={setEmail}
            />

            <CustomInput
               placeholder="Password"
               value={password}
               setValue={setPassword}
               secureTextEntry
            />
            <CustomInput
               placeholder="Repeat password"
               value={passwordReapeat}
               setValue={setPasswordReapeat}
               secureTextEntry
            />
            <CustumButton text="Register" onPress={onRegisterPressed} />

            <Text style={styles.text}>
               By registering, you confirm that you accept our{' '}
               <Text onPress={onTermOfUse} style={styles.link}>
                  Terms of Use
               </Text>{' '}
               and{' '}
               <Text onPress={onPrivatePolicy} style={styles.link}>
                  Privacy Policy
               </Text>
            </Text>
            <SocialSignInButtons />

            <CustumButton
               text="Have an account ? Sign"
               onPress={onSignInPress}
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
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#7A7774',
      margin: 10,
   },
   text: {
      color: 'gray',
      marginVertical: 10,
   },
   link: {
      color: 'red',
   },
});
export default SignUpScreen;
