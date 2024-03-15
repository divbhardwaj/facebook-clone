import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button, Image,} from 'react-native'
import React from 'react'
import {Navigation} from 'react-native-navigation';


const Maplist = () => {
  const users = [
    {
      id: 1,
      name: 'Meeting for Business',
      time: '7:35 - 8:30 P.M',
      member: '2',
    },
    {
      id: 2,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 3,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 4,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 5,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 6,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 7,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 8,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 9,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 10,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 11,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 12,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 13,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
    {
      id: 14,
      name: 'Family Night Plan',
      time: '9:00 - 11:30 P.M',
      member: '4',
    },
  ];

  return (
    <>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            fontFamily: 'robot',
            color: 'black',
            padding: 15,
          }}>
          Map List
        </Text>
      </View>
      <ScrollView style={{backgroundColor: '#DCDCDC'}}>
        <Text
          style={{
            fontSize: 29,
            padding: 8,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {' '}
          | Upcoming
        </Text>
        {users.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 25,
              padding: 15,
              marginBottom: 15,
              marginHorizontal: 10,
            }}>
            <View style={{flex: 1}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                {item.name}
              </Text>
              <Text style={{color: 'black', fontSize: 20}}>{item.time}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{marginRight: 5, tintColor: '#87cefa'}}
                source={require('/home/deeporion/Reactnative/AwesomeProject/src/assets/add-friend.png')}
              />
              <Text style={{color: '#87cefa', fontSize: 22}}>
                {item.member}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
   );
  };
export default Maplist;