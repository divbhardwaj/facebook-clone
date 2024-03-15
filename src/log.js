// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import * as yup from 'yup';
// import {useForm} from 'react-hook-form';
// import {yupResolver} from '@hookform/resolvers/yup';
// import { useForm, Controller } from 'react-hook-form';
// import {Image} from 'react-native';
// import Router from './routes/Router';
// // import DrawerNavigator from './screens/DrawerNavigator';
// import Flatlist from './screens/Flatlist';
// import Maplist from './screens/Maplist';
// import Dashboard from './screens/Dashboard';
// import Setting from './screens/Setting';

// const Login2 = ({navigation}) => {
//   return (
//     <View style={{flex: 1}}>
//       <View
//         style={{
//           textAlign: 'center',
//           marginTop: 80,
//           height: '40%',
//         }}>
//         <Text
//           style={{
//             fontSize: 80,
//             fontFamily: 'Cochin',
//             textAlign: 'center',
//             marginTop: -20,
//           }}>
//           UD
//         </Text>
//         <Image
//           style={{
//             padding: 50,
//             width: 250,
//             height: 400,
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             // resizeMode: 'contain',
//             marginLeft: 80,
//           }}
//           source={require("./assets/fre.jpeg")}
//         />
//       </View>
//       <View
//         style={{displayflex: 1, marginHorizontal: 25, marginTop: 80, gap: 40}}>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             backgroundColor: '#DCDCDC',
//             borderRadius: 10,
//           }}>
//           <Image
//             style={{
//               resizeMode: 'contain',
//               height: 20,
//               width: 20,
//               marginLeft: 5,
//             }}
//             source={require("./assets/user.png")}
//           />
//           <TextInput
//             style={{
//               borderWidth: 0.2,
//               height: 60,
//               width: 250,
//               textAlign: 'left',

//               backgroundColor: '#DCDCDC',
//               paddingLeft: 10,
//               borderColor: 'transparent',
//             }}
//             placeholder="Mobile number"
//           />
//           <Text
//             style={{
//               position: 'absolute',
//               right: 20,
//               top: 12,
//               borderLeftWidth: 0.5,
//               padding: 7,
//             }}>
//             Send OTP
//           </Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             backgroundColor: '#DCDCDC',
//             borderRadius: 10,
//           }}>
//           <Image
//             style={{
//               resizeMode: 'contain',
//               height: 20,
//               width: 20,
//               marginLeft: 5,
//             }}
//             source={require("./assets/safe.png")}
//           />
//           <TextInput
//             style={{
//               borderWidth: 0.3,
//               height: 60,
//               width: 350,
//               textAlign: 'left',
//               paddingLeft: 10,
//               borderColor: 'transparent',
//             }}
//             placeholder="OTP"
//             secureTextEntry={true}
//           />
//         </View>
//       </View>
//       <View style={{padding: 20, marginTop: 40}}>
//         <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator')}>
//           <View
//             style={{
//               backgroundColor: 'blue',
//               borderRadius: 9,
//               alignItems: 'center',
//               width: 350,
//               height: 50,
//               shadowColor: 'black',
//               shadowOffset: {width: 3, height: 2},
//               elevation: 7,
//               shadowOpacity: 10,
//               shadowRadius: 10,
//             }}>
//             <Text
//               style={{
//                 color: 'white',
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 paddingVertical: 10,
//               }}>
//               Login
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Login2;

// import React from 'react';
// import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const validationSchema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup.string().required('Password is required'),
// });

// const Login2 = ({ navigation }) => {
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(validationSchema)
//   });

//   const onSubmit = data => {
//     // Handle login logic here
//     console.log(data);
//     navigation.navigate('DrawerNavigator');
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Your UI components */}
//     </View>
//   );
// };

// return (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Email</Text>
//     <Controller
//       control={control}
//       render={({ field: { onChange, onBlur, value } }) => (
//         <TextInput
//           onBlur={onBlur}
//           onChangeText={onChange}
//           value={value}
//           placeholder="Email"
//         />
//       )}
//       name="email"
//       defaultValue=""
//     />
//     {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

//     <Text>Password</Text>
//     <Controller
//       control={control}
//       render={({ field: { onChange, onBlur, value } }) => (
//         <TextInput
//           onBlur={onBlur}
//           onChangeText={onChange}
//           value={value}
//           placeholder="Password"
//           secureTextEntry
//         />
//       )}
//       name="password"
//       defaultValue=""
//     />
//     {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}

//     <TouchableOpacity onPress={handleSubmit(onSubmit)}>
//       <View style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}>
//         <Text style={{ color: 'white' }}>Login</Text>
//       </View>
//     </TouchableOpacity>
//   </View>
// );
// };

// export default Login2;