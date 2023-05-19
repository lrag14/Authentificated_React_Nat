import { View, Text } from 'react-native';
import React from 'react';

import CustumButton from '../CustomButton/CustumButton.js';

const SocialSignInButtons = () => {
   const onSingInFacebook = () => {
      console.warn('Facebook');
   };
   const onSingInGoogle = () => {
      console.warn('Google');
   };
   const onSingInApple = () => {
      console.warn('Apple');
   };
   return (
      <>
         <CustumButton
            text="Sign with FaceBook"
            onPress={onSingInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
         />
         <CustumButton
            text="Sign with Google"
            onPress={onSingInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
         />
         <CustumButton
            text="Sign with Apple"
            onPress={onSingInApple}
            bgColor="#e3E3E3"
            fgColor="#363636"
         />
      </>
   );
};

export default SocialSignInButtons;
