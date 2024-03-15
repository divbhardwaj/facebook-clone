// import React from 'react';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image,Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-native-date-picker';
import {CountryPicker} from "react-native-country-codes-picker";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').matches(
    /^(?=.*[A-Z])(?=.*[a-z]{7,})(?=.*\d{4,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{13,}$/,
    'Password must contain at least one uppercase letter, seven lowercase letters, one special character, and four numbers'
  ),
  mobileNumber: yup.string().required('Mobile number is required'),
  dob: yup.date().required('Date of Birth is required'),
  organisation: yup.string().required('Organisation is required'),
  // Add validation for other fields like organization, image upload, etc.
});

const Signup = () => {

  const [countryCode, setCountryCode] = useState('US'); // Default country code

  // const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
  // const handleCamera = () => {
  //   ImagePicker.launchCamera({ mediaType: 'photo' }, response => {
  //     if (!response.didCancel) {
  //       setImage(response.uri);
  //     }
  //   });
  // };
  // const handleGallery = () => {
  //   ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
  //     if (!response.didCancel) {
  //       setImage(response.uri);
  //     }
  //   });
  // };
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


  // const handleImageUpload = () => {
  //   const options = {
  //     mediaType: 'photo',
  //     quality: 0.5,
  //   };

  //   launchImageLibrary(options, response => {
  //     if (response.uri) {
  //       setImage(response);
  //     }
  //   });
  // }; 
  return (
    <View style={styles.container}>
    <Text style={styles.sign}>Signup</Text>
    <Text style={styles.text}>Fill your details here</Text>
    <View style={styles.circle}>
    <Image
          style={styles.Image}
          source={selectedImage == null?require('../assets/fre.jpeg'):{ uri: selectedImage }}
        />
         <TouchableOpacity style={styles.Touch} onPress={showOptions}>
         {/* {selectedImage && ( */}
        <Image style={styles.pencil} source={require('../assets/pencil.png')} /> 
        {/* {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 , borderRadius: 200/2}} />} */}
      {/* <Button title="Open Camera" onPress={handleCamera} />
      <Button title="Open Gallery" onPress={handleGallery} /> */}
        </TouchableOpacity>

    </View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          mobileNumber: '',
          dob: new Date(),
          organisation: '',
          // Add initialValues for other fields like organization, image upload, etc.
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <View style={styles.mobileNumberContainer}>
              <CountryPicker
                countryCode={countryCode}
                withFilter
                withFlag
                withFlagButton
                withCallingCode
                withCallingCodeButton
                onSelect={(country) => setCountryCode(country.cca2)}
              />
              <TextInput
                style={styles.mobileNumberInput}
                placeholder="Mobile Number"
                onChangeText={(text) => handleChange('mobileNumber')(text)}
                onBlur={handleBlur('mobileNumber')}
                value={values.mobileNumber}
                keyboardType="phone-pad"
              />
            </View>
            {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
            <TextInput
              style={styles.input}
              placeholder="organisation"
              onChangeText={handleChange('organisation')}
              onBlur={handleBlur('organisation')}
              value={values.organisation}
            />

            <Text>Enter your Date of Birth</Text>
            <DatePicker
              style={[styles.datePicker, styles.inputBox]}
              date={values.dob}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(date) => handleChange('dob')(date)}
            />
            {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}
             {/* Image Upload */}
             {/* <TouchableOpacity onPress={handleImageUpload} style={styles.button}>
              <Text style={styles.buttonText}>Upload Image</Text>
            </TouchableOpacity>
            {image && (
              <View style={styles.imagePreviewContainer}>
                <Image source={{ uri: image.uri }} style={styles.imagePreview} />
              </View>
            )} */}
            
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Complete</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 20,
    // backgroundColor: 'black',
    // height: 10,
    // padding: 100,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    borderRadius: 70,
    borderWidth: 3,
    marginBottom: 20,
  },
  Image:{
    justifyContent: 'center',
    height: 125,
    width: 125,
    borderRadius: 70,
    // borderWidth: 5,
    // borderColor:'red',
    // marginBottom: 20,

  },
  Touch:{
    position: 'absolute',
    top: -5,
    left:80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    borderRadius: 30/2,
    height: 30,
    width: 30,
    elevation: 5,
    // marinBottom: 70,
  },
  pencil: {
    height: 20,
    width: 20,
  },
  sign:{
    color: '#031B59',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: '700',
    // marginBottom: 30,
    // marginTop: 230,
  },
  text:{
    justifyContent: 'center',
    fontFamily: 'Robuto',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 20,
    // padding: 5,
    // marginTop: 100,
  },
  input: {
    height: 60,
    width: 350,
    // borderColor: 'gray',
    borderRadius: 30,
    borderWidth: 1.5,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  date: {
    
  },
  button: {
    backgroundColor: '#031B59',
    borderRadius: 30,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold',
  },
  imagePreviewContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  imagePreview: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
   // Your existing styles
   mobileNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: 350,
    // borderRadius: 30,
    // borderWidth: 1.5,
  },
  mobileNumberInput: {
    flex: 1,
    height: 60,
    width: 350,
    borderRadius: 30,
    borderWidth:1.5,
    // marginLeft: 10,
    // paddingVertical: 10,
    paddingHorizontal: 15,
    // borderColor: '#ccc',
    // borderWidth: 1,
    // borderRadius: 5,
  },
  datePicker: {
    // width: '100%', // Adjust width as needed
    height: 60, // Adjust height as needed
    width: 350,
    borderWidth: 1.5,
    // borderColor: '#ccc',
    borderRadius: 30,
    paddingLeft: 10, // Adjust padding as needed
    paddingRight: 10, // Adjust padding as needed
    marginTop: 10, // Adjust margin as needed
    marginBottom: 10, // Adjust margin as needed
  },
  inputBox: {
    height: 60,
    width: 350,
    borderRadius: 30,
    borderWidth: 1.5,
  },
  // countryPickerContainer: {
  //   flex: 1,
  //   paddingRight: 10,
  // },
  // mobileNumberInputContainer: {
  //   flex: 3,
  // },
  // mobileNumberInput: {
  //   flex: 1,
  //   fontSize: 16,
  //   paddingVertical: 8,
  // },
});

export default Signup;

  // const MobileNumberInput = () => {
  //   const [country, setCountry] = useState({
  //     code: 'US', // Default country code
  //     name: 'United States', // Default country name
  //   });
  //   const [mobileNumber, setMobileNumber] = useState('');
  
  //   const handleCountryChange = (country) => {
  //     setCountry(country);
  //   };
  
  //   const handleMobileNumberChange = (number) => {
  //     setMobileNumber(number);
  //   };
  // }

            {/* <CountryPicker
          onSelect={handleCountryChange}
          countryCode={country.code}
          withFilter
          withFlag
          withCountryNameButton
          withAlphaFilter
        />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              onChangeText={handleChange('mobileNumber')}
              onBlur={handleBlur('mobileNumber')}
              value={values.mobileNumber}
              keyboardType="phone-pad"
            /> */}
            {/* <View style={styles.countryPickerContainer}>
        <CountryPicker
          onSelect={handleCountryChange}
          countryCode={country.code}
          withFilter
          withFlag
          withCountryNameButton
          withAlphaFilter
        />
      </View>
      <View style={styles.mobileNumberInputContainer}>
        <TextInput
          style={styles.mobileNumberInput}
          placeholder="Mobile Number"
          onChangeText={handleMobileNumberChange}
          value={mobileNumber}
          keyboardType="phone-pad"
        />
      </View> */}

                  {/* <DatePicker
              style={{ width: 200 }}
              date={values.dob}
              mode="date"
              placeholder="Select Date of Birth"
              format="YYYY-MM-DD"
              minDate="2012-01-01"
              maxDate="2023-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date) => handleChange('dob')(date)}
            /> */}

            {/* <DatePicker
              style={{ width: 200 }}
              mode='date'
              placeholder='DD-MM-YYYY'
              format='DD-MM-YYYY'
              date={values.dob}
              minDate="2012-01-01"
              maxDate="2023-12-31"              
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              // onDateChange={(dob) => { this.setState({dob}) }}
              onDateChange={(date) => handleChange('dob')(date)}
            /> */}
            {/* <TextInput */}
              {/* <DatePicker>
              // style={styles.input}
              style={{ width: 200 }}
              date={values.dob}
              mode="date"
              placeholder="Date of Birth (YYYY-MM-DD)"
              format="YYYY-MM-DD"
              minDate="2012-01-01"
              maxDate="2023-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel" */}
              {/* // onChangeText={(text) => setDob(text)}
              // value={dob} */}
              {/* keyboardType="numeric"
              maxLength={10}
              </DatePicker> */}
            {/* /> */}
            {/* {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>} */}

                    // customStyles={{
        //   dateIcon: {
        //     position: 'absolute',
        //     left: 40,
        //     top: 4,
        //     marginLeft: 30,
        //   },
        //   dateInput: {
        //     marginLeft: 56,
        //   }
        // }}
                  // ... You can check the source to find the other keys.

        // onDateChange={(date) => {this.setState({date: date})}}