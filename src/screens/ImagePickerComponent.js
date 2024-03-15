// import React, { useState } from 'react';
// import { View, Button, Image, Platform } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// const ImagePickerComponent = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const options = {
//     title: 'Select Image',
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   };
//   const openCamera = () => {
//     ImagePicker.launchCamera(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         const source = { uri: response.uri };
//         setSelectedImage(source);
//       }
//     });
//   };
//   const openGallery = () => {
//     ImagePicker.launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         const source = { uri: response.uri };
//         setSelectedImage(source);
//       }
//     });
//   };
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {selectedImage && (
//         <Image
//           source={selectedImage}
//           style={{ width: 200, height: 200, marginBottom: 10 }}
//         />
//       )}
//       <Button title="Open Camera" onPress={openCamera} />
//       <Button title="Open Gallery" onPress={openGallery} />
//     </View>
//   );
// };
// export default ImagePickerComponent;

