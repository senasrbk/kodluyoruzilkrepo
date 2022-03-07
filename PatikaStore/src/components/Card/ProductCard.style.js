import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eceff1', 
    margin: 10,
    borderRadius: 10,
    height: 350,
    width: 200,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    height:200,
    width: 150,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
  },
  description: {
    marginTop: 3,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  inner_container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    
  },
  text_container: {
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1,            // all the available vertical space will be occupied by it
    justifyContent: 'space-between' 
  },
  soldOut: {
    color: "red",
    fontWeight: 'bold',
    fontSize: 20,
  },
  soldOutContainer: {
    paddingLeft: 10,
    color: "red",
    fontWeight: 'bold',
  },

  info_price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9C9C9C',
    paddingLeft: 10,
    
  }


});
