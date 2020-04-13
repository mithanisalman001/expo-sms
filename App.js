import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import * as SMS from 'expo-sms'

export default class App extends React.Component{
  sendMessage = async () => {
    const { result } = await SMS.sendSMSAsync(
      '03012851491',
      'Hey'
    )
    console.log(result)
  }
  render(){
    return(
      <View style={styles.container}>
        <Button
          onPress={this.sendMessage}
          title="Send Message"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})