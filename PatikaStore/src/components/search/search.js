import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';

const SearchBar = (props) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Search' onChangeText={props.onChange}></TextInput>
    </View>
  );
};
 
export default SearchBar; 

const styles = StyleSheet.create({
  input:{
    backgroundColor:"#EEE",
    borderRadius:10,
    paddingLeft:15,
    marginHorizontal:10,
    marginTop:10,
    marginBottom:15,
  }
});