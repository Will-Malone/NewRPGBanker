// index.js
//if (__DEV__) {
//  const { LogBox } = require('react-native');
 // LogBox.ignoreAllLogs(); // Disable all log notifications in development
//}


import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'; // Import the HomeScreen component
import Navigation from './screens/Navigation';

//LogBox.ignoreAllLogs(); // Ignore all log notifications

const App = () => {
    return <Navigation />;
};
const Stack = createStackNavigator();


//function AppNavigator() {
  //return (
    //<NavigationContainer>
      //  <Stack.Navigator>
        //    <Stack.Screen name="HomeScreen" component={HomeScreen} />
          //  <Stack.Screen name="LoginScreen" component={LoginScreen} />
            //{/* Add more screens as needed */}
        //</Stack.Navigator>
    //</NavigationContainer>
  //);
//}

const index = () => {
  // Assume that isLoggedIn is a state that represents if the user is logged in or not
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent('NewRPGBanker', () => Navigation);

