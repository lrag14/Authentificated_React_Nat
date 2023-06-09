import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = ({
   value,
   setValue,
   placeholder,
   setPlaceholder,
   secureTextEntry,
}) => {
   return (
      <View style={styles.container}>
         <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
         />
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      // alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',
      // height: 60,

      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 5,

      paddingHorizontal: 10,
      marginVertical: 5,
   },
   input: {
      paddingTop: 5,
      paddingBottom: 5,
   },
});
export default CustomInput;
