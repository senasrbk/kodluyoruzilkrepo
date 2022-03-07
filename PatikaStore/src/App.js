import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import ProductCard from './components/Card/ProductCard';
import SearchBar from './components/search/search';
import product_data from './product_data.json';

function App() {
  
  const renderProduct = ({item}) => <ProductCard product_data={item} />;


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <SearchBar/> 
      <SafeAreaView style = {styles.secondContainer}>
        <FlatList horizontal={false} numColumns={2}
          keyExtractor={item => item.id.toString()}
          data={product_data}
          renderItem={renderProduct}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    backgroundColor: "white",
    paddingLeft: 15,
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 50,
    color: "#643881",
  },
  secondContainer:{
    padding:5,
    backgroundColor:'white'
  },
});

export default App;
