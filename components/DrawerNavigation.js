import { Ionicons } from "@expo/vector-icons";
import{Glyphmaps} from "@expo/vector-icons"
import React from "react";
import ProfileScreen from "../screens/ProfileScreen"
import AntDesign from "@expo/vector-icons/AntDesign"
import RequestsScreen from "../screens/RequestsScreen"
import {  createDrawerNavigator } from "react-navigation-drawer";
import {createAppContainer} from "react-navigation" 
import NgoWorkingScreen from "../screens/NgoWorkingScreen"
import TabNavigator from "../components/TabNavigator"
const MainNavigator = createDrawerNavigator(
    
    {
      Home: {
        navigationOptions: {
          drawerIcon: () => (
            <Ionicons name="md-home" style={{ color: "4973AB" }} size={20} />
          ),
          drawerLabel: "Home"
        },
        screen: TabNavigator
      },
      Profile: {
        navigationOptions: {
          drawerIcon: ({ tintColor }) => (
            <Ionicons name="ios-person" style={{ color: "4973AB" }} size={20}/>
         
          ),
          drawerLabel: "Profile"
        },
        screen: ProfileScreen
      },
  
    
     
    },

  );
  
  const DrawerNav = createAppContainer(MainNavigator);
  export default DrawerNav;