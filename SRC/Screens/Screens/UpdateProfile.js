import { Dimensions, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TopTab from '../../Components/TopTab';
import { useNavigation } from '@react-navigation/native';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
import { auth } from '../../Firebase/firebase'
import { updateProfile } from 'firebase/auth';

const user = auth.currentUser

export default function UpdateProfile() {
    const navigation = useNavigation()
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');

    const handleEditProfile = () => {
       updateProfile(user,{
        displayName: displayName,
       }).then(()=>{
        console.log('Profile Updated!!');
       })
    };
    return (
        <View style={styles.container}>
            <TopTab page={'UpdateProfile'} />
            <TextInput
                placeholder='Enter New DisplayName'
                style={styles.input}
                placeholderTextColor='#fff'
                value={displayName}
                onChangeText={(txt) => { setDisplayName(txt) }}
            />
            <TextInput
                placeholder='Enter New Email'
                style={styles.input}
                placeholderTextColor='#fff'
                value={email}
                onChangeText={(txt) => { setEmail(txt) }}
            />
            <Pressable style={styles.button} onPress={handleEditProfile}>
                <Text style={styles.buttonText}>
                    Submit
                </Text>
            </Pressable>
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
    input: {
        width: width - 40,
        height: 40,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        marginVertical: 10,
        color: '#fff',
        padding: 10,
        fontSize: 17,
        fontWeight: '700'
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
})