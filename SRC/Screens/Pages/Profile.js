import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import TopTab from '../../Components/TopTab';
import BottomTab from '../../Components/BottomTab';
import { auth, db } from '../../Firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Profile() {
  // const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName
        setData(displayName ? displayName : email)
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  // const handleLogout = () => {
  //   // Implement your logout logic here
  //   console.log('Logout pressed');
  // };

  // const handleEditProfile = () => {
  //   // Implement your edit profile logic here
  //   console.log('Edit Profile pressed');
  // };

  return (
    <View style={styles.container}>
      <TopTab page={'Profile'} />

      <View style={styles.profileContainer}>
        <Text style={styles.text}>#{data}</Text>

        {/* Follow and Following */}
        <View style={styles.followContainer}>
          <Text style={styles.followText}>Followers: 100</Text>
          <Text style={styles.followText}>Following: 50</Text>
        </View>
      </View>

      <BottomTab page={'Profile'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28282B',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
    marginBottom: 20,
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    marginBottom: 20,
  },
  followText: {
    color: 'white',
  },
  button: {
    backgroundColor: '#fff',
    width: width / 2,
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#28282B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
