import { View, Text, StyleSheet, Image,TouchableOpacity,Modal,Alert } from 'react-native'
import React, {useState} from 'react'
import Routerfb from '../routerfb/Routerfb'
import AppFb from '../Appfb'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown'
import Profilepage from './Profilepage'
const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation();

  // const DropdownExample = () => {
  //   const [showDropdown, setShowDropdown] = useState(false);
  
  //   const toggleDropdown = () => {
  //     setShowDropdown(!showDropdown);
  //   };
  
  //   const handleDropdownItemPress = () => {
  //     // Handle dropdown item press here
  //     // You can navigate to another screen, execute a function, etc.
  //     toggleDropdown(); // Close the dropdown after item press if needed
  //   };
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  }
  const showOptions = () => {
    Alert.alert(
      'Choose Image Source',
      '',
      [
        { text: 'Camera', onPress: handleCameraLaunch },
        { text: 'Gallery', onPress: openImagePicker },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>


      <View style={styles.uprcont}>
        <View >
        <Image style={styles.fb} source={require('../assetsfb/facebook-6.png')} />
        </View>

        <View style={styles.smlimg}>
        <View>
        {/* <TouchableOpacity onPress={toggleDropdown}> */}
        <Image source={require('../assetsfb/plus.png')} />
        {/* </TouchableOpacity> */}
        {/* <Modal
        visible={showDropdown}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleDropdown}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={handleDropdownItemPress}>
            <Text>Dropdown Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDropdownItemPress}>
            <Text>Dropdown Item 2</Text>
          </TouchableOpacity> */}
          {/* Add more dropdown items as needed */}
        {/* </View>
      </Modal> */}
        </View>
        <Image source={require('../assetsfb/magnifying-glass.png')} />
        <Image source={require('../assetsfb/messenger.png')} />
        </View>

      </View>
      <View style= {styles.upr2}>
      <TouchableOpacity onPress={() => navigation.navigate('Profilepage')}>
        <Image style={styles.diva} source={require('../assetsfb/div.jpg')} />
        </TouchableOpacity>
        <Text style={styles.text1}> What's on your mind?</Text>
        <TouchableOpacity onPress={showOptions}>
        <Image style={styles.glry} source={require('../assetsfb/gallery.png')} />
        </TouchableOpacity>
        </View>
    </View>
  )
}
// }
const styles = StyleSheet.create({
  container:{
    // flex: 1,
    display: 'flex'

  },
  uprcont:{
    display: 'flex',
    // flexDirection: 'row',
    // backgroundColor: 'black',
    height: 70,
    bottom: 10,
    // marginTop: 10,

  },
  fb:{
    height: 100,
    width: 170,
    left: 10,
    // marginBottom: 70,
    // justifyContent: 'flex-start',
    // backgroundColor: 'blue',
  },
  smlimg:{
    // backgroundColor: 'red',
    flexDirection: 'row',
    left: 280,
    gap: 12,
    bottom: 64,
  },
  // modalContainer: {
  //   backgroundColor: '#FFFFFF',
  //   padding: 20,
  //   marginHorizontal: 50,
  //   marginTop: 100,
  //   borderRadius: 10,
  //   elevation: 5,
  // },
  upr2:{
    // backgroundColor: 'black',
    height: 95,
    width: 500,
    // bottom: 40,
    display: 'flex',
    flexDirection: 'row',
    // padding: 5,
    paddingHorizontal: 10,

  },
  diva: {
    height: 60,
    width: 60,
    borderRadius: 30,
    top: 25,
  },
  text1: {
    color: 'black',
    // display: 'flex',
    justifyContent: 'center',
    // flexGrow: 1,
    top: 40,
    left: 20,
    fontSize: 20,
    fontWeight: '400',
    // height: 100,
    // width: 20,
    // backgroundColor: 'white',
  },
  glry: {
    left: 100,
    top: 30,
    height: 40,
    width: 40,
  },
})
  export default Home;