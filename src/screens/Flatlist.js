import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';

const Flatlist = () => {
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
  ];
  return (
    <>
    <View></View>
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
        Flat List
      </Text>
    </View><View style={{ backgroundColor: '#DCDCDC', height: '100%' }}>
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
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                // borderColor: 'black',
                borderRadius: 25,
                // gap: 20,
                fontSize: 10,
                padding: 5,
                // columnGap: 20,
                marginBottom: 15,
                marginHorizontal: 10,
                paddingHorizontal: 15,
              }}>
              <View>
                <Text
                  style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <Text
                  style={{ color: 'black', paddingHorizontal: 5, fontSize: 20 }}>
                  {item?.time}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                }}>
                <Image
                  style={{ marginRight: 5, tintColor: '#87cefa' }}
                  source={require('/home/deeporion/Reactnative/AwesomeProject/src/assets/add-friend.png')} />
                <Text
                  style={{
                    color: 'black',
                    marginTop: 3,
                    fontSize: 22,
                    color: '#87cefa',
                  }}>
                  {item?.member}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id} />
      </View></>
  )
}

export default Flatlist;