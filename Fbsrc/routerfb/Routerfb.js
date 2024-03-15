import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screenfb/Home';
import Video from '../screenfb/Video';
import Friends from '../screenfb/Friends';
import MarketPlace from '../screenfb/MarketPlace';
import Notification from '../screenfb/Notification';
import Menu from '../screenfb/Menu';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Routerfb = () => {
  return (
 
    <Tab.Navigator
     tabBarOptions={{
      showLabel: false }}>
        <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false,
          tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assetsfb/home.png') : require('../assetsfb/home.png')}
                style={{ width: 24, height: 24 }}
                label= "Home"
              />
            ),
        }}
      />
       <Tab.Screen
        name="Video"
        component={Video}
        options={{headerShown: false,
          tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assetsfb/youtube.png') : require('../assetsfb/youtube.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
        }}
      />
      <Tab.Screen name="Friends" component={Friends} 
      options={{headerShown: false,
          tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assetsfb/friends.png') : require('../assetsfb/friends.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
        }}
      />
      <Tab.Screen name="MarketPlace" component={MarketPlace}
      options={{headerShown: false,
          tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assetsfb/market.png') : require('../assetsfb/market.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
        }}
       />
      <Tab.Screen name="Notification" component={Notification} 
        options={{headerShown: false,
          tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assetsfb/bell.png') : require('../assetsfb/bell.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
        }}
      />
      <Tab.Screen name="Menu" component={Menu} 
        options={{headerShown: false,
          tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('../assetsfb/menu.png') : require('../assetsfb/menu.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
        }}
      />

       </Tab.Navigator>
  )
}


CustomTabBar = ({state, descriptors, navigation, label}) => {
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
export default Routerfb