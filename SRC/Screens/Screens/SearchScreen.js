import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function SearchScreen() {
    const [data, setData] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Search Here ...'
      cursorColor='#28282B'
      value={data}
      onChangeText={(txt)=>{setData(txt)}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#28282B'
    },
    input:{
        width:width-30,
        paddingVertical:10,
        backgroundColor:'#fff',
        borderRadius:15,
        paddingHorizontal:15,
        fontSize:18,
        fontWeight:'900',
        position:'absolute',
        top:24
    }
})