import { View, Text, StyleSheet, TextInput, TouchableOpacity,Button} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import recovery from './recovery';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = ({navigation}) => {
  return (
    <View>
    <View>
      <Text style={styles.forg}>Forgot Password</Text>
      <Text style={styles.text}>No worries, we’ll send a recovery link to your email.</Text>
    </View>

<Formik
  initialValues={{ email: '' }}
  validationSchema={validationSchema}
  onSubmit={(values) => {
    console.log(values);
  }}
>
  {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
    <View style={styles.container}>
    <Text style={styles.email}>Email</Text>
    <TextInput
              style={styles.input}
              placeholder="xyz@gmail.com"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      {/* <Button style={styles.btn} title="Send a recovery link" onPress={handleSubmit} /> */}
      <View>
    {/* <TouchableOpacity onPress={{handleSubmit}> */}
        <TouchableOpacity onPress={() => navigation.navigate('recovery')}>
        <Text style={styles.btn}>Send a recovery link</Text> 
        </TouchableOpacity>
    </View>
    </View>
  )}
</Formik>
</View>
  )
};




const styles = StyleSheet.create({
container: {
// flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 20,
// backgroundColor: 'black',
// height: 300,
},
email:{
  fontSize: 20,
  fontFamily: ' Roboto ',
  fontWeight: '100',
  color: 'black',
  height: 30,
  marginTop: 30,
  marginBottom: 10,
  marginRight: 300,
},
input: {
height: 60,
width: 350,
// borderColor: 'black',
borderWidth: 1.2,
marginBottom: 10,
paddingHorizontal: 20,
borderRadius: 30,
color: 'black',
// backgroundColor:'red'
},
errorText: {
color: 'red',
marginBottom: 10,
},
btn:{
  textAlign: 'center',
  padding: 15,
  backgroundColor: '#031B59',
  borderRadius: 30,
  // alignItems: 'center',
  // justifyContent: 'center',
  color: 'white',
  width: 350,
  marginTop: 20,
  fontSize: 20,
},
  forg:{
    color: '#031B59',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: '700',
    marginTop: 230,
  },
  text:{
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: 'black',
  },
  // container:{
  //   backgroundColor: 'black',
  // },
});


//       <Formik
//         initialValues={{ email: '' }}
//         validationSchema={validationSchema}
//         onSubmit={() => {
//         }}
//       >

//       {({ handleChange, handleBlur, values, errors }) => (
//         <View style={styles.container}>
//         <Text>Email</Text>
//           <View>
//             <TextInput
//               placeholder="xyz@gmail.com"
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}
//             />
//           </View>
//           {errors.email && (
//             <Text >{errors.email}</Text>
//           )}</View>
//       )}

//       <TouchableOpacity onPress={handleSubmit}>
//       <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <View>
//           {/* <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}> */}
//               <Text>send a recovery link</Text> 
//               {/* </TouchableOpacity> */}
//           </View>
//           </Formik>
// const styles = StyleSheet.create({
//   forg:{
//     color: '#031B59',
//     justifyContent: 'center',
//     textAlign: 'center',
//     fontFamily: 'Roboto',
//     fontSize: 40,
//     fontWeight: '700',
//     marginTop: 230,
//   },
//   text:{
//     textAlign: 'center',
//     fontSize: 20,
//     padding: 10,
//     color: 'black',
//   },
//   container:{
//     backgroundColor: 'black',
//   },
//   errorText:{

//   },
// })
export default ForgotPassword;