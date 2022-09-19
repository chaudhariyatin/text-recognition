import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          // uri: 'file:///data/user/0/com.ssmanager/cache/rn_image_picker_lib_temp_65363703-6403-4ded-bb37-e368f096b80d.jpg',
          uri: 'file:///storage/emulated/0/DCIM/Camera/IMG_20190919_123041.jpg',
        }}
        style={{
          width: 108,
          height: 120,
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
