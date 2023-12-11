import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome, Feather } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function TopTab({ page }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {page === 'Home' && <View style={styles.view}>
        <Text style={styles.text}>Home</Text>
        <Pressable style={styles.btn} onPress={() => { navigation.navigate('Search') }}>
          <FontAwesome name='search' size={25} color='#fff' />
        </Pressable>
      </View>}
      {page === 'Threads' && <Text style={styles.text}>Threads</Text>}
      {page === 'Activity' && <Text style={styles.text}>Activity</Text>}
      {page === 'Profile' &&
        <View style={styles.view}>
          <Text style={styles.text}>Profile</Text>
          <Pressable style={styles.btn} onPress={() => { navigation.navigate('Settings') }}>
            <Feather name='settings' size={25} color='#fff' />
          </Pressable>
        </View>
      }
      {
        page === 'Settings' && <Text style={styles.text}>Settings</Text>
      }
      {
        page === 'UpdateProfile' && <Text style={styles.text}>Update</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#28282B',
    paddingVertical: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 8,
    marginLeft: 25
  },
  view: {
    justifyContent: 'space-between',
    width: width,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    marginRight: 12,
    padding: 8,
  }
});
