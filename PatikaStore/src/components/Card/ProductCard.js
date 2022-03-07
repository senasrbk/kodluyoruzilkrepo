import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product_data}) => {
  return( 
  <View style={styles.container}>
    <View style={styles.inner_container}><Image style={styles.image}
     source={
        {uri: product_data.imgURL
    }}/>
    </View>
    <View style={styles.text_container}>
     <Text style={styles.title}>{product_data.title} </Text>
     <Text style = {styles.info_price}>{product_data.price} </Text> 
        {product_data.inStock ? (
        <View style={styles.soldOutContainer}>
            <Text style={styles.soldOut}>STOKTA YOK</Text>
        </View>): null }
      </View>
    </View>
    );    
};

export default ProductCard;
