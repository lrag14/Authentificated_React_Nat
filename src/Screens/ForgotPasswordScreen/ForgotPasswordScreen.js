import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';

/////////// ASSETS ////////////////

/////////////////////
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustumButton from '../../components/CustomButton/CustumButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
   const [username, setUsername] = useState('');
   const navigation = useNavigation();
   ///////////////////////////////////////

   const onResendPress = () => {
      console.warn('ResendPress');
   };
   const onSendPressed = () => {
      navigation.navigate('NewPassword');
   };
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <CustomInput
               placeholder="your email"
               value={username}
               setValue={setUsername}
            />

            <CustumButton text="Send" onPress={onSendPressed} />

            <CustumButton
               text="Back to Sign"
               onPress={onSendPressed}
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
export default ForgotPasswordScreen;
