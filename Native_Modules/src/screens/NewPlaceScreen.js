import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  ImageComponent,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';
import ImageSelector from '../components/ImageSelector';
import LocationPicker from '../components/LocationPicker';

const NewPlaceScreen = props => {
  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const dispatch = useDispatch();

  const places = useSelector(state => state.places.places);

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
  };

  const savePlaceHandler = () => {
    const actionCreator = placesActions.addPlace(titleValue, selectedImage, selectedLocation);
    dispatch(actionCreator);
    props.navigation.goBack();
  };
  const locationPickedHandler = useCallback( location => {
    setSelectedLocation(location)
  }, [])

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="new place "
            value={titleValue}
            onChangeText={titleChangeHandler}
          />
        </View>
        <ImageSelector onImageTake={imageTakenHandler} />
        <LocationPicker navigation={props.navigation} route = {props.route} onLocationPicked={locationPickedHandler}/>
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  form: {
    margin: 30,
  },

  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPlaceScreen;
