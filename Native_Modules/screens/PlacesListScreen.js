import React from 'react';
import {View, Text, StyleSheet, Platform, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import {useSelector} from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = props => {
  props.navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'add' : 'ios-add'}
          onPress={() => {
            props.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    ),
  });
  const placesData = useSelector(state => state.places.places);

  return (
    <FlatList
      data={placesData}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          title={itemData.item.title}
          image={null}
          address={null}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({});

export default PlacesListScreen;
