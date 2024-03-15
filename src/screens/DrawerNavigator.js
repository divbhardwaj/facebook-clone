import { View, Text } from 'react-native'
import React from 'react'
import Dashboard from './Dashboard'
import Setting from './Setting'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Router from '../routes/Router';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Router" component={Router}/>
      <Drawer.Screen name="Dashboard" component={Dashboard}/>
      <Drawer.Screen name="Setting" component={Setting}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;