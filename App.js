import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './SRC/Screens/Pages/Home';
import Threads from './SRC/Screens/Pages/Threads';
import Activity from './SRC/Screens/Pages/Activity';
import Profile from './SRC/Screens/Pages/Profile';
import Login from './SRC/Screens/Auth/Login';
import Register from './SRC/Screens/Auth/Register';
import SettingsScreen from './SRC/Screens/Screens/SettingsScreen';
import UpdateProfile from './SRC/Screens/Screens/UpdateProfile';
import SearchScreen from './SRC/Screens/Screens/SearchScreen';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Register'>
        <Stack.Screen name="Home" component={Home} options={{animation:'slide_from_right'}} />
        <Stack.Screen name="Threads" component={Threads} options={{animation:'slide_from_right'}} />
        <Stack.Screen name="Activity" component={Activity} options={{animation:'slide_from_right'}} />
        <Stack.Screen name="Profile" component={Profile} options={{animation:'slide_from_right'}} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{animation:'slide_from_right'}} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{animation:'slide_from_right'}} />
        <Stack.Screen name="Search" component={SearchScreen} options={{animation:'slide_from_bottom'}} />
        <Stack.Screen name="Login" component={Login} options={{animation:'slide_from_right'}} />
        <Stack.Screen name="Register" component={Register} options={{animation:'slide_from_right'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
