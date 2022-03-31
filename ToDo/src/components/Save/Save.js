import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './Save.style';

const Save = props => {
  const [change, setChange] = useState(true);
  const inputChange = text => {
    text === '' ? setChange(true) : setChange(false);
    setToDoValue(text);
  };
  const [toDoValue, setToDoValue] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapilacak..."
        placeholderTextColor={'#7a7f81'}
        multiline={true}
        onChangeText={inputChange}
        value={toDoValue}
      />
      {change ? (
        <TouchableOpacity
          style={styles.button_null}
          onPress={props.onSave}
          disabled={true}>
          <Text style={styles.button_text}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onSave(toDoValue)}>
          <Text style={styles.button_text}>Kaydet</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Save;