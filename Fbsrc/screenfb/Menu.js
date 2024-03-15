import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
  ScrollView,
  Alert,
  Navigation
  // Dimensions
} from 'react-native';
// import React from 'react';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import {Navigation} from 'react-native-navigation';
import { NavigationContainer } from '@react-navigation/native';
import SettingsPrivacy from './SettingsPrivacy';
// import Drawer from './Drawer';
import Profilepage from './Profilepage';

const data = [
  { id: '1', title: 'Memories' },
  { id: '2', title: 'Saved' },
  { id: '3', title: 'Groups' },
  { id: '4', title: 'Video' },
  { id: '5', title: 'Marketplace' },   // , image: require('../assetsfb/market.png')
  { id: '6', title: 'Friends' },
  { id: '7', title: 'Feeds' },
  { id: '8', title: 'Events' },
  { id: '9', title: 'Avatars' },
  { id: '10', title: 'Gaming' },
  { id: '10', title: 'Messenger Kids' },
  { id: '10', title: 'Pages' },
  { id: '10', title: 'Reels' },

];
const GridItem = ({ item }) => (
  <View style={styles.itemContainer}>
    {/* <Image source={item.image} style={styles.image} /> */}
    <Text style={styles.itemText}>{item.title}</Text>
  </View>
);
// const GridItem = ({ item }) => (
//   <View style={styles.itemContainer}>
//     <Text style={styles.itemText}>{item.title}</Text>
//   </View>
// );
const Menu = () => {
  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems);
  };
  const handleLogout = () => {
    // Show an alert when "Log Out" is pressed
    Alert.alert(
      'Confirm Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            // Perform logout actions here
            console.log('OK Pressed, logging out...');
          }
        }
      ],
      { cancelable: false }
    );
  };
  
  // const YourComponent = () => {
  //   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  //   const toggleDropdown = () => {
  //     setIsDropdownVisible(!isDropdownVisible);
  //   };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.uprcont}>
        <Text style={styles.txt}>Menu</Text>
        <View style={styles.img}>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsPrivacy')}>
        <Image source={require('../assetsfb/settings.png')} /> 
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
        <Image source={require('../assetsfb/magnifying-glass.png')} />
        </TouchableOpacity>
        </View>
        </View>
      </View>

      <View > 
      <TouchableOpacity onPress={() => navigation.navigate('Profilepage')} style={styles.cont2}>    
        <Image style={{height: 60,width: 60,borderRadius: 30, justifyContent: 'center',top: 17,}}source={require('../assetsfb/div.jpg')} />
        <Text style={{justifyContent: 'center',fontSize: 22, fontWeight: '600', color: 'black',top: 28,right: 20}}> Divyansh Bhardwaj</Text>
        <Image style={{justifyContent: 'center',height: 35,width: 35, top: 27}} source={require('../assetsfb/chevron.png')} />
        </TouchableOpacity>
      </View>
    <ScrollView>

    <View style={{ flex: 1 }}>
      <View style={styles.fltlst}>
      {data.slice(0, showAllItems ? data.length : 8).map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
        {/* <FlatList
         data={showAllItems ? data : data.slice(0, 8)} // Show all items if showAllItems is true, otherwise show only 4 items
          renderItem={({ item }) => <GridItem item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2} 
        // data={data}
        // renderItem={({ item }) => <GridItem item={item} />}
        // keyExtractor={(item) => item.id}
        // numColumns={2} // Set number of columns for the grid
        /> */}
              <View style={{backgroundColor: 'grey', height: 50, margin: 20, borderRadius: 20,}}>
      {!showAllItems ? (
        <TouchableOpacity
          onPress={toggleShowAllItems}
          style={styles.seebtn}
          // style={{ backgroundColor: 'grey', height: 50, margin: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', justifyContent: 'center', textAlign: 'center', top: 9 }}>See More</Text>
        </TouchableOpacity>
      ): (
        <TouchableOpacity
          onPress={toggleShowAllItems}
          style={styles.seebtn}
          // style={{ backgroundColor: 'grey', height: 50, margin: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', justifyContent: 'center', textAlign: 'center', top: 9 }}>See Less</Text>
        </TouchableOpacity>
      )
      }
        {/* <Text style={{color: 'black', fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'center', top: 10,}}>See More</Text> */}
      </View>
      </View>
      </View>



      <View style={styles.hnds}> 
      
      <View style={{width:"100%",flexDirection:"row"}}>
      <View style={{width:"80%",flexDirection: 'row',gap: 5,margin: 7}}>
      <Image source={require('../assetsfb/question.png')} />
        <Text style={{fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'left',color: 'black',}}> Help & Support</Text>
        </View>
        <TouchableOpacity style={{width:"20%",justifyContent: 'center',left: 20}}>
        <Image source={require('../assetsfb/chevron.png')} />
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Drawer')}> */}
      {/* <TouchableOpacity  onPress={() => Navigation.navigate('Drawer')} > */}
      {/* <TouchableOpacity onPress={toggleDropdown}  */}
      {/* <Image source={require('../assetsfb/question.png')} />
        <Text style={{fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'left',color: 'black',}}> Help & Support</Text>
        <Image source={require('../assetsfb/chevron.png')} style={{left: 170}} /> */}
        {/* </TouchableOpacity> */}
        {/* </TouchableOpacity> */}
        {/* {isDropdownVisible && ( */}
        {/* <View style={styles.dropdownContent}> */}
          {/* Your dropdown content here */}
          {/* <Text>This is your dropdown content.</Text> */}
        {/* </View> */}
      {/* )} */}
      {/* </TouchableOpacity> */}
      </View>
      <View style= {styles.hnds}>
      <View style={{width:"100%",flexDirection:"row"}}>
      <View style={{width:"80%",flexDirection: 'row',gap: 5,margin: 7}}>
      <Image source={require('../assetsfb/settings.png')} />
        <Text style={{fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'left',color: 'black',}}> Settings & Privacy</Text>
        </View>
        <TouchableOpacity style={{width:"20%",justifyContent: 'center',left: 20}}>
        <Image source={require('../assetsfb/chevron.png')} />
        </TouchableOpacity>
      </View>
      </View>
      {/* <View style= {styles.hnds}>
      <Image source={require('../assetsfb/settings.png')} />
        <Text style={{fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'left',color: 'black',}}> Settings & Privacy</Text>
        <Image source={require('../assetsfb/chevron.png')}  style={{left: 140}} />
      </View> */}

      <View style= {styles.hnds}>
      <View style={{width:"100%",flexDirection:"row"}}>
      <View style={{width:"80%",flexDirection: 'row',gap: 5,margin: 7}}>
      <Image source={require('../assetsfb/professional.png')} />
        <Text style={{fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'left',color: 'black',}}> Professional access</Text>
        </View>
        <TouchableOpacity style={{width:"20%",justifyContent: 'center',left: 20}}>
        <Image source={require('../assetsfb/chevron.png')} />
        </TouchableOpacity>
      </View>
      </View>
      {/* <View style= {styles.hnds}>
      <Image source={require('../assetsfb/professional.png')} />
        <Text style={{fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'left',color: 'black',}}> Professional access</Text>
        <Image source={require('../assetsfb/chevron.png')} style={styles.drop}  />
      </View> */}
      <View style= {styles.hnds}>
      <View style={{width:"100%",flexDirection:"row"}}>
      <View style={{width:"80%",flexDirection: 'row',gap: 5,margin: 7}}>
      <Image source={require('../assetsfb/meta.png')} />
        <Text style={{fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'left',color: 'black',}}>  Also from Meta</Text>
        </View>
        <TouchableOpacity style={{width:"20%",justifyContent: 'center',left: 20}}>
        <Image source={require('../assetsfb/chevron.png')} />
        </TouchableOpacity>
      </View>
      </View>
      {/* <View style= {styles.hnds}>
      <Image source={require('../assetsfb/meta.png')} />
        <Text style={{fontSize: 20, fontWeight: '600',justifyContent: 'center',textAlign: 'left',color: 'black',}}> Also from Meta</Text>
        <Image source={require('../assetsfb/chevron.png')}  style={{left: 160}} />
      </View> */}
      <View style={styles.log}>
        {/* <Text style={{color: 'black', fontSize: 23, fontWeight: '600',justifyContent: 'center', textAlign: 'center'}}> Log Out</Text> */}
        <TouchableOpacity onPress={handleLogout} style={styles.log}>
        <Text style={{ color: 'black', fontSize: 23, fontWeight: '600', justifyContent: 'center', textAlign: 'center' }}>Log Out</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}
// }
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    height: '100%',
  },
  uprcont: {
    // backgroundColor: 'black',
    height: '10%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    // justifyContent: 'space-between'
  },
  txt: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: 45,
    fontWeight: '700',
    // color: 'black'
  },
  img: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    // left: 280,
    gap: 12,
    // bottom: 64,
    left: 200,
    // gap: 50,
    top: 20,
    // height: 50,
    // width: 40,
    // padding: 10

  },
  cont2: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    // height: '12%',
    height: 90,
    // width: 380,
    borderRadius:10,
    // left: 10,
    paddingHorizontal: 20,
    margin: 12

  },
  itemContainer: {
    width: '48%', // Adjust this value based on your grid layout needs
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    marginVertical: 8,
    // flex: 1,
    // margin: 10,
    // height: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#f0f0f0',
    // borderRadius: 20,
    // padding: 30,
    // paddingHorizontal: 25,
    // margin: 30,
  },
  itemText: {
    fontSize: 16,
  },
  fltlst: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // height: '60%',
  },
  // image: {
  //   width: Dimensions.get('window').width / numColumns - 10,
  //   height: 150,
  //   resizeMode: 'cover',
  // },
  seebtn: {
    width: 350,
  },
  hnds: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 0.5,
    paddingTop:20,
    paddingBottom:20,
    padding: 10,
    // paddingHorizontal: 5,
    gap: 10
    // backgroundColor: 'black',
    // height: '6%',
  },
  log: {
    justifyContent: 'center',
    display: 'flex',
    height: 50,
    // position: 'absolute',
    // height: '4%',
    backgroundColor: 'grey',
    // padding: 20,
    margin: 20,
    borderRadius: 10,
    padding:7,
  },
  drop: {
    // justifyContent: 'space-between',
    // display: 'flex',
    
    // flex:
    // flexDirection: 'row',
    left: 120
    // flexShrink: 1
  }
})
export default Menu


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Alert } from 'react-native';

// const data = [
//   { id: '1', title: 'Memories' },
//   { id: '2', title: 'Saved' },
//   { id: '3', title: 'Groups' },
//   { id: '4', title: 'Video' },
//   { id: '5', title: 'Marketplace' },
//   { id: '6', title: 'Friends' },
//   { id: '7', title: 'Feeds' },
//   { id: '8', title: 'Events' },
//   { id: '9', title: 'Avatars' },
//   { id: '10', title: 'Gaming' },
//   { id: '11', title: 'Messenger Kids' },
//   { id: '12', title: 'Pages' },
//   { id: '13', title: 'Reels' },
// ];

// const Menu = () => {
//   const [showAllItems, setShowAllItems] = useState(false);

//   const toggleShowAllItems = () => {
//     setShowAllItems(!showAllItems);
//   };

//   const handleLogout = () => {
//     Alert.alert(
//       'Confirm Log Out',
//       'Are you sure you want to log out?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => {
//             console.log('OK Pressed, logging out...');
//             // Perform logout actions here
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Your other components */}
//       <View style={styles.fltlst}>
//         {data.slice(0, showAllItems ? data.length : 8).map((item) => (
//           <GridItem key={item.id} item={item} />
//         ))}
//       </View>

//       {/* "See More" button */}
//       {!showAllItems && (
//         <TouchableOpacity onPress={toggleShowAllItems} style={styles.seeMoreButton}>
//           <Text style={styles.seeMoreText}>See More</Text>
//         </TouchableOpacity>
//       )}

//       {/* Logout button */}
//       <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
//         <Text style={styles.logoutText}>Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const GridItem = ({ item }) => (
//   <View style={styles.itemContainer}>
//     <Text style={styles.itemText}>{item.title}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   fltlst: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   itemContainer: {
//     width: '48%', // Adjust this value based on your grid layout needs
//     backgroundColor: '#f0f0f0',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 10,
//     marginVertical: 5,
//   },
//   itemText: {
//     fontSize: 16,
//   },
//   seeMoreButton: {
//     backgroundColor: 'grey',
//     height: 50,
//     marginHorizontal: 20,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   seeMoreText: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   logoutButton: {
//     backgroundColor: 'grey',
//     height: 50,
//     marginHorizontal: 20,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logoutText: {
//     color: 'black',
//     fontSize: 23,
//     fontWeight: '600',
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'lightgrey',
//     height: '100%',
//   },
//   uprcont: {
//     // backgroundColor: 'black',
//     height: '10%',
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//     // justifyContent: 'space-between'
//   },
//   txt: {
//     color: 'black',
//     fontFamily: 'sans-serif',
//     fontSize: 45,
//     fontWeight: '700',
//     // color: 'black'
//   },
//   img: {
//     // backgroundColor: 'blue',
//     flexDirection: 'row',
//     // left: 280,
//     gap: 12,
//     // bottom: 64,
//     left: 200,
//     // gap: 50,
//     top: 20,
//     // height: 50,
//     // width: 40,
//     // padding: 10

//   },
//   cont2: {
//     justifyContent: 'space-between',
//     display: 'flex',
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     height: '12%',
//     // width: 380,
//     borderRadius:10,
//     // left: 10,
//     paddingHorizontal: 20,
//     margin: 12

//   },
//   itemContainer: {
//     flex: 1,
//     margin: 10,
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 20,
//     // padding: 30,
//     // paddingHorizontal: 25,
//     margin: 10,
//   },
//   itemText: {
//     fontSize: 16,
//   },
//   fltlst: {
//     // height: '60%',
//   },
//   // image: {
//   //   width: Dimensions.get('window').width / numColumns - 10,
//   //   height: 150,
//   //   resizeMode: 'cover',
//   // },
//   hnds: {
//     borderColor: 'black',
//     borderWidth: 0.5,
//     paddingTop:20,
//     paddingBottom:20,
//     // backgroundColor: 'black',
//     // height: '6%',
//   },
//   log: {
//     // position: 'absolute',
//     // height: '4%',
//     backgroundColor: 'grey',
//     // padding: 20,
//     margin: 20,
//     borderRadius: 10,
//     padding:7,
//   },
// })
// export default Menu;
