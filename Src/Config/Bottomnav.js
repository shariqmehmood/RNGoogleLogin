import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddOrder from '../Screens/AddOrder';
import AllOrder from '../Screens/Allorder';
import Home from '../Screens/Home';
import Ionicons from "react-native-vector-icons/Ionicons"
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        
        screenOptions={({ route }) => ({
            headerShown:false,
            headerTintColor:"#F2AA4CFF",
            headerTitleAlign:"center",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused
                ? 'home-sharp': 'home-sharp';
            } else if (route.name === 'All-Jobs') {
              iconName = focused ? 'md-newspaper' : 'newspaper-outline';
            }
            else if (route.name === 'Add-Order') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
            <Tab.Screen name="All-Jobs" component={AllOrder} />
            <Tab.Screen name="Add-Order" component={AddOrder} />
            <Tab.Screen name="Profile" component={Home} />
        </Tab.Navigator>


    );
}
export default MyTabs;