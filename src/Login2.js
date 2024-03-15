import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  CheckBox,
} from 'react-native';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';
import ImagePickerComponent from './screens/ImagePickerComponent';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').matches(
    /^(?=.*[A-Z])(?=.*[a-z]{7,})(?=.*\d{4,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{13,}$/,
    'Password must contain at least one uppercase letter, seven lowercase letters, one special character, and four numbers'
  ),
});
const Login2 = ({ navigation }) => {
  // const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  // const handleForgotPassword = () => {
  //   // Navigation logic to the ForgotPassword screen
  //   navigation.navigate('ForgotPassword');
  // };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        
        <Image
          style={styles.logoImage}
          source={require('./assets/Group.png')}
        />
        <Text style={styles.logoText}>Welcome Back!</Text>
        <Text style={styles.Text}>Enter your credentials to access your account.</Text>
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.formContainer}>
          <Text style={styles.emai}>Email</Text>
            <View style={styles.inputContainer}>
              {/* <Image
                style={styles.inputIcon}
                source={require('./assets/user.png')}
              /> */}
              <TextInput
                style={styles.input}
                placeholder="xyz@gmail.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <Text style={styles.pass}>Password</Text>
            <View style={styles.inputContainer}>
              {/* <Image
                style={styles.inputIcon}
                source={require('./assets/safe.png')}
              /> */}
              <TextInput
                style={styles.input}
                placeholder="******"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </View>
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <View style={styles.rempas}>
            {/* <View style={styles.checkboxContainer}> */}
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
        {/* <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  /> */}
    <View>
        <Text style={styles.reme}>Remember Me</Text>
    </View>
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forg}>Forgot Password ?</Text> 
        </TouchableOpacity>
    </View>
      {/* </View> */}
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Router')} style={styles.signupButtonContainer}>
        <Button title="Signup" onPress={() => navigation.navigate('Router')} color="white" />
      </TouchableOpacity>           */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Router')}>
        <View style={styles.signbutton}><Button title='Signup'></Button></View>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signbutton}>
      <Text style={styles.signText}>Signup</Text>
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
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 80,
    // height: '40%',
  },
//   logoText: {
//     font-family: Roboto;
// font-size: 26px;
// font-weight: 600;
// line-height: 45px;
// letter-spacing: 0em;
// text-align: center;
    // fontSize: 80,
    // fontFamily: 'Cochin',
    // textAlign: 'center',
    // marginTop: -50,
  // },
  logoText: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: '900',
    color: '#031B59',
    height: 50,
    // fontSize: '500',
    width: 350,
    // backgroundColor: 'black',
    textAlign: 'center',
    marginTop: 40,
  },
  Text: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    height: 50,
    width: 400,
    textAlign: 'center',
    // backgroundColor: 'black',
    marginTop: 7,
  },
  logoImage: {
    // padding: 70,
    display: 'block',
    width: '50%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 20,
    // backgroundColor: 'black',
    display: 'flex',
  },
  emai: {
    fontSize: 22,
    // fontFamily: ' Roboto ',
    // fontWeight: '50',
    color: 'black',
    height: 30,
    // backgroundColor: 'black',
    marginTop: 20,
    marginBottom: 13,
  },
  pass: {
    fontSize: 22,
    // fontWeight: '50',
    color: 'black',
    height: 30,
    marginTop: 20,
    marginBottom: 13,
    marginTop: 5,
  },
  formContainer: {
    marginHorizontal: 25,
    // marginTop: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#DCDCDC',
    borderRadius: 10,
    // borderBottomRightRadius: 20,
    // borderRadius: 40,
    marginBottom: 10,
    
    
  },
  // inputIcon: {
  //   resizeMode: 'contain',
  //   height: 25,
  //   width: 20,
  //   marginLeft: 5,
  // },
  input: {
    borderWidth: 1.5,
    borderRadius: 40,
    height: 60,
    flex: 1,
    textAlign: 'left',
    // backgroundColor: '#DCDCDC',
    paddingLeft: 10,
    color: 'black',
    fontSize: 20,
    // backgroundColor: 'black',
  },
  rempas: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  reme: {
    // backgroundColor: 'black',
    color: 'black',
    fontSize: 20,
    
  },
  forg: {
    // backgroundColor: 'black',
    color: '#031B59',
    fontSize: 21,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#031B59',
    borderRadius: 30,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    // shadowColor: 'black',
    // shadowOffset: { width: 5, height: 5 },
    // elevation: 12,
    // shadowOpacity: 1,
    // shadowRadius: 10,
    marginTop: 50,

  },
  signbutton: {
    backgroundColor: '#031B59',
    borderRadius: 30,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    marginTop: 20,
  },
  signText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
    // marginBottom: 2,
    // marginTop: 10,
  },
});

export default Login2;

