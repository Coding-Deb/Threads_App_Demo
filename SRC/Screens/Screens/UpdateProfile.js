import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TopTab from '../../Components/TopTab';
import { useNavigation } from '@react-navigation/native';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function UpdateProfile() {
    const navigation = useNavigation()
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');

    const handleEditProfile = () => {
        // Implement your edit profile logic here
        console.log('Edit Profile pressed');
    };
    return (
        <View style={styles.container}>
            <TopTab page={'UpdateProfile'} />
            <TextInput
            placeholder='Enter New DisplayName'
            style={styles.input}
            placeholderTextColor='#fff'
            value={displayName}
            onChangeText={(txt)=>{setDisplayName(txt)}}
            />
            <TextInput
             placeholder='Enter New Email'
             style={styles.input}
             placeholderTextColor='#fff'
             value={email}
             onChangeText={(txt)=>{setEmail(txt)}}
            />
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
    input:{
        width: width - 40,
        height: 40,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        marginVertical: 10,
        color: '#fff',
        padding: 10,
        fontSize:17,
        fontWeight:'700'
    }
})