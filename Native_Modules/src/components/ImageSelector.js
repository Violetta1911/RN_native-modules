import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Colors from '../constants/Colors';

const ImageSelector = props => {
  const [pickedImage, setPickedImage] = useState('');

  const takeImageHandler = async () => {
    const image = await ImagePicker.launchCamera({
      allowsEdditing: true,
    });
    setPickedImage(image.assets[0].uri);
    props.onImageTake(image.assets[0].uri)
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.preview}>
        {!pickedImage ? (
          <Text>No image picked yet...</Text>
        ) : (
          <Image style={styles.image} source={{uri: pickedImage}} />
        )}
      </View>
      <Button
        title={!pickedImage ? "Take image" : "Change image"}
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  preview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageSelector;
