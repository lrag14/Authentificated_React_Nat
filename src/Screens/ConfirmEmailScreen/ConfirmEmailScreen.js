import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';

/////////// ASSETS ////////////////

/////////////////////
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustumButton from '../../components/CustomButton/CustumButton.js';
import SocialSignInButtons from '../../../components/SocialSignInButtons/SocialSignInButtons.js';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
   const [code, setCode] = useState('');
   const navigation = useNavigation();

   ///////////////////////////////////////
   const onConfirmPressed = () => {
      navigation.navigate('Home');
   };
   const onTermOfUse = () => {
      console.warn('TearmOfUse');
   };
   const onPrivatePolicy = () => {
      console.warn('pricatePolicy');
   };
   const onResendPress = () => {
      console.warn('ResendPress');
   };
   const onSignInPress = () => {
      navigation.navigate('SignIn');
   };
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.root}>
            <Text style={styles.title}>Confirm your Count</Text>
            <CustomInput
               placeholder="Confirm your code"
               value={code}
               setValue={setCode}
            />

            <CustumButton text="Confirm" onPress={onConfirmPressed} />

            <CustumButton
               text="Resend code"
               onPress={onResendPress}
               type={'SECONDARY'}
            />
            <CustumButton
               text="Back to Sign"
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
export default ConfirmEmailScreen;
