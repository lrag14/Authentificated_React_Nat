import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustumButton = ({
   onPress,
   text,
   type = 'PRIMARY',
   bgColor,
   fgColor,
}) => {
   return (
      <Pressable
         onPress={onPress}
         style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {},
         ]}>
         <Text
            style={[
               styles.text,
               styles[`text_${type}`],
               fgColor ? { color: fgColor } : {},
            ]}>
            {text}
         </Text>
      </Pressable>
   );
};

const styles = StyleSheet.create({
   container: {
      padding: 15,
      marginVertical: 5,

      alignItems: 'center',
      borderRadius: 5,
   },

   container_PRIMARY: {
      backgroundColor: '#7A7774',
   },
   container_SECONDARY: {
      Color: '#7A7774',
      borderWidth: 2,
   },
   container_TERTIARY: {},
   text: {
      fontWeight: 'bold',
      color: 'white',
   },
   text_SECONDARY: { color: '#7A7774' },

   text_TERTIARY: {
      color: 'gray',
   },
});

export default CustumButton;
