import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
import { MaterialCommunityIcons, FontAwesome5 } from 'react-native-vector-icons'
import { auth, db } from '../../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('User Logged In Successfully');
                setEmail('')
                setPassword('')
                navigation.navigate('Home')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                navigation.navigate('Login')
            });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Login
            </Text>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#000',
                borderWidth: 1,
                margin: 10,
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 15,
                width: 320
            }}>
                <MaterialCommunityIcons name='email' size={28} color='black' />
                <TextInput
                    placeholder='Enter Email Here'
                    cursorColor='#000'
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                />
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#000',
                borderWidth: 1,
                margin: 10,
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 15,
                width: 320
            }}>
                <FontAwesome5 name='key' size={28} color='black' />

                <TextInput
                    placeholder='Enter Password Here'
                    style={styles.input}
                    cursorColor='#000'
                    value={password}
                    onChangeText={(text) => { setPassword(text) }}
                />
            </View>
            <Pressable style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btntext}>
                    Login
                </Text>
            </Pressable>
            <Text style={styles.subtext} onPress={() => { 
                navigation.navigate('Register') 
                setEmail('')
                setPassword('')
                }}>
                Don't have an account? Register
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9DCC9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        // height: 40,
        width: 250,
        // borderColor: '#000',
        // borderWidth: 1,
        margin: 10,
        padding: 15,
        fontSize: 17,
        fontWeight: '700',
        borderRadius: 15
    },
    btn: {
        width: 300,
        height: 50,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 10

    },
    btntext: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'

    },
    subtext: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700'
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: '700',
        margin: 8
    }
})