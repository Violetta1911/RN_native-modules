import React from 'react';
import {View, Text, StyleSheet} from 'react-native';




const PlacaDetailScreen = props => {

    props.navigation.setOptions({
        headerTitle: props.route.params.placeTitle
    })
 
  return (
    <View>
      <Text>Place Detales Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default PlacaDetailScreen;