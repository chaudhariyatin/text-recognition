import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Button} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import {recognizeImage} from '../mlkit';

const {TextRecognitionModule} = NativeModules;

const Home = () => {
  const [response, setResponse] = React.useState(null);
  // useEffect(() => {
  //   fetchImageDetails();
  // }, []);

  const fetchImageDetails = async url => {
    try {
      const response = await recognizeImage(
        'file:///data/user/0/com.ssmanager/cache/rn_image_picker_lib_temp_41113758-c23b-438c-b1d5-bf30bf5e0cb7.jpg',
      );
      console.log('@@@', response);
    } catch (error) {
      console.log(error);
    }
  };

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);
  console.log(response);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.internal}>
        <Button
          onPress={() =>
            onButtonPress('library', {
              selectionLimit: 0,
              mediaType: 'photo',
              includeBase64: false,
            })
          }>
          Gallary
        </Button>
        <Button onPress={() => fetchImageDetails()}>Process Image</Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  internal: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
