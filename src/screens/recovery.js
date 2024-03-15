import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const recovery = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>Check your email</Text>
      <Text>We have sent a password reset link to email from previous@step.com</Text>
      <View style={StyleSheet.min}>
        <Text>Resend e-mail</Text>
        <Text>Back to Log in</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'black',

      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
  },
})
export default recovery