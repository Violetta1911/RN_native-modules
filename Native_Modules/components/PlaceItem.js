import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {
  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={props.onSelect}>
      <Image style={styles.itemImage} source={{uri: props.image}} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemAddress}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: 'blue',
  },
  itemInfo: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 250,
    marginLeft: 25,
  },
  itemTitle: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  itemAddress: {
    color: '#666',
    fontSize: 16,
  },
});

export default PlaceItem;
