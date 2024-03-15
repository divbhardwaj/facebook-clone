import { View, Text, Image, StyleSheet, TouchableOpacity, Button,ScrollView,Alert } from 'react-native'
import React ,{useState}from 'react'
import { useNavigation } from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const Profilepage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selecteeImage, setSelecteeImage] = useState(null);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  // const MyComponent = () => {
  //   const [button1Color, setButton1Color] = useState('blue');
  //   const [button2Color, setButton2Color] = useState('blue');
  
  //   const handleButton1Press = () => {
  //     setButton1Color('red'); // Change color on press
  //     setButton2Color('blue'); // Reset other button color
  //     // Navigate to the desired screen
  //     // navigation.navigate('Screen1');
  //   };
  
  //   const handleButton2Press = () => {
  //     setButton1Color('blue'); // Reset other button color
  //     setButton2Color('red'); // Change color on press
  //     // Navigate to the desired screen
  //     // navigation.navigate('Screen2');
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
  };

  const openImageePicker = () => {
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
        setSelecteeImage(imageUri);
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
        setSelecteeImage(imageUri);
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
        { text: 'Gallery', onPress: openImageePicker },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.uprcont}> 
        <View style={{right: 60, top: 8}}>
        <TouchableOpacity  onPress={handleGoBack} >
        <Image style={{height: 25, width: 25}} source={require('../assetsfb/left-arrow.png')} />
        </TouchableOpacity>
        </View>
        <View>
        <Text style={{fontFamily: "Bangers_400Regular,",fontSize: 22, fontWeight: '600', color: 'black', top: 5}}> Divyansh Bhardwaj</Text>
        </View>
        <View style={{left: 40,top: 8}}>
        <TouchableOpacity>
        <Image style={{height: 25, width: 25}} source={require('../assetsfb/pencil.png')} />
        </TouchableOpacity>
        </View>
        <View style={{left: 60,top: 8}}>
        <TouchableOpacity>
        <Image style={{height: 25, width: 25}} source={require('../assetsfb/magnifying-glass.png')} />
        </TouchableOpacity>
        </View>
      </View>

  {/* photos */}
      <View style={styles.img}>
        <View>
          <Image style={styles.bigimg} 
          // source={require('../assetsfb/db.jpg')}>
         source={selecteeImage == null?require('../assetsfb/db.jpg'):{ uri: selecteeImage }}>
           
          </Image>
          <TouchableOpacity style={{position: 'absolute',height: 40,width: 40,}} onPress={showOptions}>
          <Image style={{position: 'absolute',height: 40,width: 40,left: 360,top: 230,}} source={require('../assetsfb/photo-camera.png')}/>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center',position: 'absolute', backgroundColor: 'blue', height: 210,width: 210,borderRadius: 100,padding: 5,top: 130,borderColor: 'blue',left: 7}}>
          <Image style={styles.smlimg} 
          // source={require('../assetsfb/div.jpg')}>
            source={selectedImage == null?require('../assetsfb/div.jpg'):{ uri: selectedImage }}>
          </Image>
          <TouchableOpacity style={{position: 'absolute',height: 40,width: 40,left: 160,top: 160}} onPress={showOptions}>
          <Image style={{position: 'absolute',height: 40,width: 40,}} source={require('../assetsfb/photo-camera.png')}/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.namecont}>

      <View style={{display: 'flex', flexDirection: 'row',paddingHorizontal: 10,padding: 15,top: 7 }}>
      <Text style={{fontFamily: "OpenSans_400Regular",fontSize: 30, fontWeight: '700',color: 'black',}}>Divyansh Bhardwaj</Text>
      <Text style={{fontFamily: "OpenSans_400Regular",fontSize: 22, fontWeight: '500',color: 'black',top: 5,left: 5}}>(Prince)</Text>
      </View>

      <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal: 10, gap: 50 }}>
      <Button 
        title="+ Add to story"
        color="blue"
        style={{
        // backgroundColor: 'red',
        height: 50,
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }}
        // onPress={() => Alert.alert('Simple Button pressed')}
      />
       <Button
        title="Edit profile"
        color="grey"
        // onPress={() => Alert.alert('Simple Button pressed')}
      />
       <Button
        title="..."
        color="grey"
        // onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>

      </View>

      <View style={{backgroundColor: 'grey', height: '100%'}}>
      <View style={{backgroundColor: 'white', top: 9,height: '95%'}}>

      <View style={{ flexDirection: 'row',gap: 20,paddingHorizontal: 20,top: 20 }}>
      <View style={{backgroundColor: 'grey',borderRadius: 30,height: 50,width:90,justifyContent: 'center'}}><Text style={{fontSize: 23,fontWeight: '500',color: 'black',textAlign: 'center'}}>Posts</Text></View>
      <View style={{backgroundColor: 'grey',borderRadius: 30,height: 50,width:90,justifyContent: 'center'}}><Text style={{fontSize: 23,fontWeight: '500',color: 'black',textAlign: 'center'}}>Reels</Text></View>      
      {/* <TouchableOpacity
        style={{ backgroundColor: button1Color, padding: 10, margin: 5 }}
        onPress={handleButton1Press}
      >
        <Text style={{ color: 'white' }}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: button2Color, padding: 10, margin: 5 }}
        onPress={handleButton2Press}
      >
        <Text style={{ color: 'white' }}>Button 2</Text>
      </TouchableOpacity> */}
    </View>
      <Text style={styles.line}>  </Text>

      <View>
        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between',margin: 15,bottom: 35}}>
        <Text style={{fontSize: 25, fontWeight: '700',color: 'black'}}>Details</Text>
        <Image source={require('../assetsfb/chevron.png')}/>
        </View>

        <View style={{display: 'flex',flexDirection: 'row',gap: 18,margin: 14,bottom: 30}}>
          <Image source={require('../assetsfb/education.png')} style={{top: 5}}/>
          <Text style={{fontSize: 25,fontWeight: '700',color: 'black'}}>Went to Neerja Modi School, Jaipur</Text>
        </View>

        <View style={{display: 'flex',flexDirection: 'row',gap: 18,margin: 14,bottom: 30}}>
        <Image source={require('../assetsfb/home.png')} style={{height: 25,width:25}}/>
          <Text style={{fontSize: 25,fontWeight: '700',color: 'black'}}>Lives in Jaipur , Rajasthan</Text>
        </View>

        <View style={{display: 'flex',flexDirection: 'row',gap: 16,margin: 11,bottom: 30}}>
        <Image source={require('../assetsfb/pin.png')}/>
          <Text style={{fontSize: 25,fontWeight: '700',color: 'black'}}>From Jaipur, Rajasthan</Text>
        </View>

        <View style={{display: 'flex',flexDirection: 'row',gap: 16,margin: 11,bottom: 30}}>
        <Image source={require('../assetsfb/dots.png')}/>
          <Text style={{fontSize: 25,fontWeight: '500',color: 'black'}}>See Your About Info</Text>
        </View>

        <View style={{display: 'flex',justifyContent: 'center'}} >
          <TouchableOpacity style={{backgroundColor:'blue',height: 50,width: 350,margin: 20,bottom: 20,borderRadius: 10}}>
            <Text style={{display: 'flex', textAlign: 'center', fontSize: 20,fontWeight: '700',top: 7,color: 'black'}}>Edit public details</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.linea}>  </Text>

      </View>
      </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  uprcont: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    height: 80,
    padding: 20,
  },
  img: {
    justifyContent: 'center',
    display: 'flex',
    // position: 'absolute',

  },
  bigimg: {
    justifyContent: 'center',
    height: 280,
    width: 650,
    padding: 20,
    // left: 40
  },
  smlimg: {
    height: 200,
    width: 200,
    // backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    // padding: 50,
    // borderColor: 'blue',
    // top: 100,
  },
  namecont: {
    // backgroundColor: 'black',
    justifyContent:'center',
    display: 'flex',
    height: 200,
    width: 500,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
    marginVertical: 30,
    bottom: 9
  },
  linea: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
    marginVertical: 30,
    bottom: 70
  },
})
// }
export default Profilepage