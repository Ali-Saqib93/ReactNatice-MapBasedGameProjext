
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './Navigation/AppNavigator';
import { loadLocation } from './constants/service';
import AsyncStorage from '@react-native-async-storage/async-storage';
SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await SplashScreen.hideAsync(); // Move this line here
      } catch (e) {
        console.warn(e);
      } 
    }
    prepare();
  }, []);

  return(
    <View
    style={{ flex: 1}}>
       <AppNavigator/>
  </View>
  )
}

