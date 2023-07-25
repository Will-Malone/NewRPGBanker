// screens/HomeScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigation from './Navigation';


const HomeScreen = ({navigation}) => {
  //const navigation = useNavigation();
  // Dummy data for the character and bank lists.
  const characters = [
    { id: '1', name: 'Character 1' },
    { id: '2', name: 'Character 2' },
    // Add more characters as needed
  ];

  const banks = [
    { id: '1', name: 'Bank 1' },
    { id: '2', name: 'Bank 2' },
    // Add more banks as needed
  ];

  const handleCreateCharacter = () => {
    // Implement logic to create a new character here
    console.log('Create new character');
  };

  const handleCreateBank = () => {
    // Implement logic to create a new bank here
    console.log('Create new bank');
  };

  const handleLogout = () => {
    // Implement logout logic here
    // Then navigate back to the Login screen
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      {/* Top half of the screen - Characters */}
      <View style={styles.halfScreen}>
        <Text style={styles.sectionTitle}>Characters</Text>
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleCreateCharacter}>
          <Text style={styles.buttonText}>Create New Character</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom half of the screen - Banks */}
      <View style={styles.halfScreen}>
        <Text style={styles.sectionTitle}>Banks</Text>
        <FlatList
          data={banks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleCreateBank}>
          <Text style={styles.buttonText}>Create New Bank</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  halfScreen: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
