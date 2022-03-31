import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ToDoCard from './components/ToDoCard/ToDoCard';
import Save from './components/Save/Save';

function App() {
  const [counter, setCounter] = useState(0);
  const [toDo, setToDo] = useState([]);

  function fixCounter() {
    let count = 0;
    toDo.forEach(item => (!item.isDone ? count++ : {}));
    setCounter(count);
  }
  useEffect(fixCounter, [toDo]);

  function addToDo(text) {
    const newToDo = {
      id: Date.now(),
      title: text.toString(),
      isDone: false,
    };
    setToDo([...toDo, newToDo]);
  }
  const changeStatus = changedtoDo => {
    const newToDo = toDo.map(item => {
      if (item.id === changedtoDo) {
        if (item.isDone) {
          return {...item, isDone: false};
        } else {
          return {...item, isDone: true};
        }
      }
      return item;
    });
    setToDo(newToDo);
  };
  function deleteToDo(id) {
    const newToDo = toDo;
    var index = newToDo.indexOf(id);
    newToDo.splice(index, 1);
    setToDo(newToDo);
  }

  const renderToDo = ({item}) => (
    <ToDoCard toDo={item} onChange={changeStatus} onDelete={deleteToDo} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>Yapilacaklar</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <FlatList
        style={styles.flat_list}
        data={toDo}
        renderItem={renderToDo}
        keyExtractor={item => item.id}
      />
      <Save onSave={addToDo} />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f2027',
    flex: 1,
  },
  inner_container: {
    flexDirection: 'row',
    padding: 10,
  },
  title: {fontWeight: 'bold', fontSize: 35, flex: 1, color: '#fea500'},
  counter: {fontSize: 35, marginRight: 5, color: '#fea500'},
  flat_list: {flex: 1},
});