import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'

export default function Home() {
  return (
    <View style={styles.container}>
      <TopTab page={'Home'}/>
      <Text>Home</Text>
      <BottomTab page={'Home'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28282B',
    alignItems: 'center',
    // justifyContent: 'space-between'
},
})