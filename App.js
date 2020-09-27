import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/screens/auth/Login';
import Calculate from './src/screens/Calculate'


const App  = ()=>{
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
         {/* <Login/> */}
         <Calculate/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex:1
  },
  
});

export default App;
