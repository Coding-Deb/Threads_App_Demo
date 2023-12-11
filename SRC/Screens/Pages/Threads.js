import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TopTab from '../../Components/TopTab'
import BottomTab from '../../Components/BottomTab'
import { FontAwesome5 } from 'react-native-vector-icons'
import { auth, db } from '../../Firebase/firebase'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Threads() {
  const uid = auth.currentUser.uid
  const [data, setData] = useState('');
  const [isvisible, setIsvisible] = useState(false);
  return (
    <View style={styles.container}>
      <TopTab page={'Threads'} />
      <View style={{ width: width, height: 70, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
        <Pressable style={styles.btn} onPress={() => { setIsvisible(!isvisible) }}>
          <FontAwesome5 name='plus' size={28} color='#000' />
        </Pressable>
        <Pressable style={styles.btn}>
          <FontAwesome5 name='image' size={28} color='#000' />
        </Pressable>

      </View>
      {/* <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>
        {uid}
      </Text> */}
      {
        isvisible === true ?
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TextInput
              style={styles.input}
              placeholder='Search Here ...'
              cursorColor='#28282B'
              value={data}
              onChangeText={(txt) => { setData(txt) }}
            />
            <Pressable style={{width:width/1.6,margin:'auto',backgroundColor:'#fff',borderRadius:15,marginTop:15,paddingVertical:12,paddingHorizontal:8,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'#28282B'}}>
                Send
              </Text>
            </Pressable>
          </View>
          :
          null
      }
      <BottomTab page={'Threads'} />
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
  btn: {
    width: width / 2.5,
    height: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18
  },
  input: {
    width: width - 30,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 18
    // position:'absolute',
    // top:24
  }
})