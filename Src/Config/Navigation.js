import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Headings from '../Screens/MainScreen';
import Home from '../Screens/Home';
import ForgetPassword from '../Screens/ForgetPassword';
import MyTabs from './Bottomnav';
import GetSingle from '../Screens/One_Order';
import PostBit from '../Screens/Postbit';
import SearchResult from '../Screens/SearchScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();




function Navigation() {
  const [Email, setemail] = useState("")
  useEffect(() => {
    (async () =>
      await AsyncStorage.getItem('userEmail')
        .then((email) => {
          console.log(email)
          setemail(email)
        })
        .catch((e) => {
          console.log(e, "eerer")
        }))()
  }, [])
  console.log(Email, "state");
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="MyTabs" component={MyTabs} />
        <Stack.Screen options={{ headerTitleAlign: "center" }} name="Splash" component={Headings} />
        <Stack.Screen name="Post" component={GetSingle} />
        <Stack.Screen name="PostReply" component={PostBit} />
        <Stack.Screen options={{ headerTitleAlign: "center" }} name="Login" component={Login} />
        <Stack.Screen options={{ headerTitleAlign: "center" }} name="Home" component={Home} />
        <Stack.Screen options={{ headerTitleAlign: "center" , headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen options={{ headerTitleAlign: "center" }} name="SetPassword" component={ForgetPassword} />
        <Stack.Screen options={{ headerShown: false }} name="SearchResult" component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;