import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import vars from '../../env';

const MapView = props => {
  let imageViewUrl;
  if (props.location) {
    imageViewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng},&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${vars.googleApiKey}`;
  }
  return (
<View style={{...styles.mapPreview, ...props.style}}>
      {props.location ? (
        <Image style={styles.mapImage} source={{uri: imageViewUrl}} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage:{
    width: '100%',
    height: '100%'
  }
});

export default MapView;
