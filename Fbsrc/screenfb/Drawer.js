import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Routerfb from '../routerfb/Routerfb';
import HelpCentre from './HelpCentre';
import SupportInbox from './SupportInbox';
// import {NavigationContainer} from "@react-navigation/native";

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Routerfb" component={Routerfb}/>
    <Drawer.Screen name="HelpCentre" component={HelpCentre}/>
    <Drawer.Screen name="SupportInbox" component={SupportInbox}/>
  </Drawer.Navigator>
  // </NavigationContainer>
  )
}

export default Drawer