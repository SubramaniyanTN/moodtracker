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
import ErrorBoundary from './src/Utils/ErrorBoundary';


function App() {
  return (
    <>
    <SafeAreaView style={styles.mainContainer} >
    <ErrorBoundary>
    <AuthContextWrapper>
    <Router/>
    </AuthContextWrapper>
    </ErrorBoundary>
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
