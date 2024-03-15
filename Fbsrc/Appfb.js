import 'react-native-gesture-handler'
import { View, Text, TouchableOpacity, Navigation } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screenfb/Fb';
import Routerfb from './routerfb/Routerfb';
// import Home from './screenfb/Home';
// import Video from './screenfb/Video';
// import Friends from './screenfb/Friends';
// import MarketPlace from './screenfb/MarketPlace';
// import Notification from './screenfb/Notification';
// import Menu from './screenfb/Menu';
import SettingsPrivacy from './screenfb/SettingsPrivacy';
import Profilepage from './screenfb/Profilepage';
import Drawer from './screenfb/Drawer';

const stack = createNativeStackNavigator();
// const DrawerNavigator = createDrawerNavigator();

export default function AppFb() {
  return(
    <NavigationContainer>
    <stack.Navigator>
    {/* <stack.Screen name=' Drawer' component={Drawer} options={{headerShown: false}} /> */}
    <stack.Screen name=' Routerfb' component={Routerfb} options={{headerShown: false}} />
    <stack.Screen name='Home' component={Home} options={{headerShown: false}} />
    <stack.Screen name='SettingsPrivacy' component={SettingsPrivacy} options={{headerShown: false}} />
    <stack.Screen name='Profilepage' component={Profilepage} options={{headerShown: false}} />

    </stack.Navigator>
    </NavigationContainer>
  )
}