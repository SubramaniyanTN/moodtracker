/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AuthContextWrapper from './src/Context/AuthContextWrapper'
import Router from './src/Router/Router';


function App() {
  return (
    <>
    <SafeAreaView style={styles.mainContainer} >
    <AuthContextWrapper>
    <Router/>
    </AuthContextWrapper>
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
