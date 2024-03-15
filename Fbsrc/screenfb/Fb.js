import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Routerfb from '../routerfb/Routerfb'
import AppFb from '../Appfb'
const Fb = () => {
  return (
    <View style={styles.container}>


      <View style={styles.uprcont}>
        <View >
        <Image style={styles.fb} source={require('../assetsfb/facebook-6.png')} />
        </View>

        <View style={styles.smlimg}>
        <Image source={require('../assetsfb/plus.png')} />
        <Image source={require('../assetsfb/magnifying-glass.png')} />
        <Image source={require('../assetsfb/messenger.png')} />
        </View>

      </View>
      <View style= {styles.upr2}>
        <Image style={styles.diva} source={require('../assetsfb/div.jpg')} />
        <Text style={styles.text1}> What's on your mind?</Text>
        <Image style={styles.glry} source={require('../assetsfb/gallery.png')} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    // flex: 1,
    display: 'flex'

  },
  uprcont:{
    display: 'flex',
    // flexDirection: 'row',
    // backgroundColor: 'black',
    height: 70,
    bottom: 10,
    // marginTop: 10,

  },
  fb:{
    height: 100,
    width: 170,
    left: 10,
    // marginBottom: 70,
    // justifyContent: 'flex-start',
    // backgroundColor: 'blue',
  },
  smlimg:{
    // backgroundColor: 'red',
    flexDirection: 'row',
    left: 280,
    gap: 12,
    bottom: 64,
  },
  upr2:{
    // backgroundColor: 'black',
    height: 95,
    width: 500,
    // bottom: 40,
    display: 'flex',
    flexDirection: 'row',
    // padding: 5,
    paddingHorizontal: 10,

  },
  diva: {
    height: 60,
    width: 60,
    borderRadius: 30,
    top: 25,
  },
  text1: {
    color: 'black',
    // display: 'flex',
    justifyContent: 'center',
    // flexGrow: 1,
    top: 40,
    left: 20,
    fontSize: 20,
    fontWeight: '400',
    // height: 100,
    // width: 20,
    // backgroundColor: 'white',
  },
  glry: {
    left: 100,
    top: 30,
    height: 40,
    width: 40,
  },
})
  export default Fb;