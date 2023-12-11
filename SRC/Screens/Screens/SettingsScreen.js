import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopTab from '../../Components/TopTab';
import { auth } from '../../Firebase/firebase';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function SettingsScreen() {
    const navigation = useNavigation()
    const handleLogout = () => {
        // Implement your logout logic here
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
            console.log('Sign Out');
          }).catch((error) => {
            // An error happened.
            navigation.navigate('Settings')
          });
    };

    const handleEditProfile = () => {
        navigation.navigate('UpdateProfile')
    };
    return (
        <View style={styles.container}>
            <TopTab page={'Settings'} />
            <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'',
        alignItems: 'center',
        backgroundColor: '#28282B'
    },
    button: {
        width: width - 20,
        padding: 12,
        borderRadius: 5,
        marginVertical: 10,
        borderColor:'#fff',
        borderWidth:1,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})