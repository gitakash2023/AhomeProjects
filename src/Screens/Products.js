import {View, Image, ScrollView, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

const Products = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const apiData = await response.json(); // Parse the response JSON
      setData(apiData);

      // Handle the data here
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  //  use effect
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      {data.map((item, index) => (
        <View key={index} style={styels.container}>
          <Image source={{uri: item.image}} style={styels.image} />
          <Text style={styels.title}>{item.title}</Text>
          <Text style={styels.price}>${item.price}.00</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const styels = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 20,
    alignItems: 'center',
  },
  price: {
    color: 'green',
    fontSize: 16,
  },
  container: {
    margin: 20,
    border: '1px black solid',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center',
  },
});

export default Products;
