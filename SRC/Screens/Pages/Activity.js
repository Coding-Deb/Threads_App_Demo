import React, { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import TopTab from '../../Components/TopTab';
import BottomTab from '../../Components/BottomTab';

const { height, width } = Dimensions.get('screen');

export default function Activity() {
  const [activeButton, setActiveButton] = useState(0);

  const handlePress = (index) => {
    setActiveButton(index);
  };

  return (
    <View style={styles.container}>
      <TopTab page={'Activity'} />
      <View style={styles.tabContainer}>
        <Pressable
          style={[styles.tabBtn, activeButton === 0 && styles.activeTabBtn]}
          onPress={() => handlePress(0)}
        >
          <Text style={styles.tabText}>Following</Text>
        </Pressable>
        <Pressable
          style={[styles.tabBtn, activeButton === 1 && styles.activeTabBtn]}
          onPress={() => handlePress(1)}
        >
          <Text style={styles.tabText}>All</Text>
        </Pressable>
        <Pressable
          style={[styles.tabBtn, activeButton === 2 && styles.activeTabBtn]}
          onPress={() => handlePress(2)}
        >
          <Text style={styles.tabText}>Requests</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.activeButtonText}>
          {activeButton === 0 ? 'Following' : activeButton === 1 ? 'All' : 'Requests'}
        </Text>
      </View>
      <BottomTab page={'Activity'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28282B',
    alignItems: 'center',
  },
  tabContainer: {
    backgroundColor: 'white',
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBtn: {
    backgroundColor: 'grey',
    width: width / 3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabBtn: {
    backgroundColor: '#fff', // Change this to the color you want for the active button
  },
  tabText: {
    color: 'black', // Change this to the color you want for the tab text
  },
  activeButtonText: {
    color: 'white',
  },
});
