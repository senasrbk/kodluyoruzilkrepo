import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './ToDoCard.style';

const ToDoCard = props => {
  return (
    <View>
      {!props.toDo.isDone ? (
        <TouchableHighlight
          style={styles.not_done_inner_container}
          onPress={() => props.onChange(props.toDo.id)}
          onLongPress={() => props.onDelete(props.toDo.id)}>
          <Text style={styles.not_done_text}>{props.toDo.title}</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          style={styles.done_inner_container}
          onPress={() => props.onChange(props.toDo.id)}
          onLongPress={() => props.onDelete(props.toDo.id)}>
          <Text style={styles.done_text}>{props.toDo.title}</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default ToDoCard;