/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from './src/BottomTabNavigator/BottomTabNavigator';
import { SafeAreaView, StyleSheet } from 'react-native';


function App() {
  return (
    <>
    <SafeAreaView style={styles.mainContainer} >
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    </SafeAreaView>
    </>
  );
}

const styles=StyleSheet.create({
  mainContainer:{
    flex:1
  }
})




export default App;
