import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Flatlist from '../screens/Flatlist';
import Maplist from '../screens/Maplist';
import {Navigation} from 'react-native-navigation';
import DrawerNavigator from '../screens/Dashboard';
import Dashboard from '../screens/Dashboard';
import Setting from '../screens/Setting';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Router = () => {
  return (
    <Tab.Navigator>
     {/* <Drawer.Navigator>
    <Drawer.Screen name="Dashboard" component={Dashboard}/>
    <Drawer.Screen name="Setting" component={Setting}/>
    <Tab.Screen
        name="Flatlist"
        component={Flatlist}/>
        <Tab.Screen
        name="Maplist"
        component={Maplist}/>
    </Drawer.Navigator> */}
      
        <Tab.Screen
        name="Flatlist"
        component={Flatlist}
        // options={{
        //   tabBarIcon: require("/home/deeporion/Reactnative/AwesomeProject/src/assets/list.png"),
        // }}
      />
       <Tab.Screen
        name="Maplist"
        component={Maplist}
        // options={{
        //   tabBarIcon: require("/home/deeporion/Reactnative/AwesomeProject/src/assets/expand.png"),
        // }}
      />
       </Tab.Navigator>
  );
};

CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabItem, isFocused && styles.tabItemFocused]}>
            <Image
              source={options.tabBarIcon}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'white',
    height: 90,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 10, // For Android
    backgroundColor: 'red',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
  tabItemFocused: {
    // Custom styling for focused tab item
  },
});
export default Router;