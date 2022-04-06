

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlashMessage from "react-native-flash-message";
import Navigation from './Src/Config/Navigation';

const App = () => {

  return (
    <>
      <StatusBar />
      <Navigation />
      <FlashMessage position="top" />

    </>
  );
};

export default App;
