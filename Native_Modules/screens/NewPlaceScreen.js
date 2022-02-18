import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';

const NewPlaceScreen = props => {
  const [titleValue, setTitleValue] = useState('');

  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack()
  };

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
