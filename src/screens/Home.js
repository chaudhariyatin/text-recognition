import {NativeModules, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const {TextRecognitionModule} = NativeModules;

const Home = () => {
  useEffect(() => {
    fetchImageDetails();
  }, []);

  const fetchImageDetails = async () => {
    await TextRecognitionModule.recognizeImage('Hello world!');
  };
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
