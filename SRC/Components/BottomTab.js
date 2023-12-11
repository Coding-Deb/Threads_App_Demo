import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const iconSize = 25;

export default function BottomTab({ page }) {
    const navigation = useNavigation();

    const renderTab = (tabName, iconName, iconOutlineName) => {
        const isPageActive = page === tabName;

        // Check if the icons exist, otherwise use a default icon or handle as needed
        const IconComponent = FontAwesome; // You can set a default icon component
        const iconColor = '#fff';

        return (
            <Pressable
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={() => navigation.navigate(tabName)}
            >
                {IconComponent && (
                    <IconComponent
                        name={isPageActive ? iconName : iconOutlineName}
                        size={iconSize}
                        color={iconColor}
                    />
                )}
                <Text style={[styles.text, isPageActive && styles.activeText]}>
                    {isPageActive ? tabName : null}
                </Text>
            </Pressable>
        );
    };
    const renderTab2 = (tabName, iconName, iconOutlineName) => {
        const isPageActive = page === tabName;

        // Check if the icons exist, otherwise use a default icon or handle as needed
        const IconComponent = MaterialCommunityIcons; // You can set a default icon component
        const iconColor = '#fff';

        return (
            <Pressable
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={() => navigation.navigate(tabName)}
            >
                {IconComponent && (
                    <IconComponent
                        name={isPageActive ? iconName : iconOutlineName}
                        size={iconSize}
                        color={iconColor}
                    />
                )}
                <Text style={[styles.text, isPageActive && styles.activeText]}>
                    {isPageActive ? tabName : null}
                </Text>
            </Pressable>
        );
    };


    return (
        <View style={styles.container}>
            {renderTab2('Home', 'home', 'home-outline')}
            {renderTab('Threads', 'pencil-square-o', 'pencil-square-o')}
            {renderTab('Activity', 'heart', 'heart-o')}
            {renderTab('Profile', 'user', 'user-o')}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        backgroundColor: '#28282B',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    tabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        marginTop: 4,
    },
    activeText: {
        fontWeight: '700',
    },
});
