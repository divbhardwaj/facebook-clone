import 'react-native-gesture-handler'
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login2 from './Login2';
import Router from './routes/Router';
import Flatlist from './screens/Flatlist';
import Maplist from './screens/Maplist';
import DrawerNavigator from './screens/DrawerNavigator';
import Dashboard from './screens/Dashboard';
import Setting from './screens/Setting';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';
import recovery from './screens/recovery';

const Drawer = createDrawerNavigator();
const stack = createNativeStackNavigator();

export default function AppStack() {
  return(
    <NavigationContainer>
    <stack.Navigator>
      <stack.Screen
        name='Login2'
        component={Login2}
        options={{headerShown: false}}
      ></stack.Screen>
      <stack.Screen
        name='Signup'
        component={Signup}
        options={{headerShown: false}}
      ></stack.Screen>
            <stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{headerShown: false}}
      ></stack.Screen>            
      <stack.Screen
        name='recovery'
        component={recovery}
        options={{headerShown: false}}
      ></stack.Screen>
            {/* <stack.Screen
        name='DrawerNavigator'
        component={DrawerNavigator}
        options={{headerShown: false}}
      ></stack.Screen> */}
    </stack.Navigator>
    </NavigationContainer>
  )
}
