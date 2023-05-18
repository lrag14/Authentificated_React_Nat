import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';

/////////// ASSETS ////////////////

/////////////////////
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustumButton from '../../components/CustomButton/CustumButton.js';
import SocialSignInButtons from '../../../components/SocialSignInButtons/SocialSignInButtons.js';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
   const [code, setCode] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const navigation = useNavigation();

   ///////////////////////////////////////

   const onPrivatePolicy = () => {
      console.warn('pricatePolicy');
   };
   const onSignInPressed = () => {
      navigation.navigate('SignIn');
   };
   const onSubmitPressed = () => {
      navigation.navigate('Home');
   };
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.root}>
            <Text style={styles.title}>Confirm your password</Text>
            <CustomInput
               placeholder="Confirm your code"
               value={code}
               setValue={setCode}
            />
            <CustomInput
               placeholder="Enter your new password"
               value={newPassword}
               setValue={setNewPassword}
               secureTextEntry={true}
            />

            <CustumButton text="Submit" onPress={onSubmitPressed} />

            <CustumButton
               text="Back to Sign"
               onPress={onSignInPressed}
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
export default NewPasswordScreen;
