import { Buffer } from 'buffer';
global.Buffer = Buffer; // very important
import React from 'react';

import { Text, View, StyleSheet,Dimensions,Image } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"

import {NavigationContainer} from "@react-navigation/native"

import { createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from './screens/LoginScreen';

import NgoWorkingScreen from './screens/NgoWorkingScreen';
import UserWorkingScreen from './screens/UserWorkingScreen';
import UserRegisterScreen from "./screens/UserRegisterScreen"
import NgoRegisterScreen from "./screens/NgoRegisterScreen"

const Stack = createStackNavigator()



function MyStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#E2E2E2',
        height:Dimensions.get("window").height/13
      },
      
      headerTintColor:'black',
      headerTitleStyle:{
        fontWeight:'bold',
        
      }
    }}
    >
      <Stack.Screen
      
      name="HomeScreen"

      component={HomeScreen}
      options={{title:'Home'}}
      />

   
      <Stack.Screen

      name="LoginScreen"
      component={LoginScreen}
      options={{title:'Login'}}
      
      />
      <Stack.Screen
        name="UserRegisterScreen"
        component={UserRegisterScreen}
        options={{title:'User Register'}}



      />
       <Stack.Screen
        name="NgoRegisterScreen"
        component={NgoRegisterScreen}
        options={{title:'NGO Register'}}



      />
       <Stack.Screen
        name="UserWorkingScreen"
        component={UserWorkingScreen}
        options={{title:'Main',headerLeft:null}}



      />
       <Stack.Screen
        name="NgoWorkingScreen"
        component={NgoWorkingScreen}
        options={{title:'Main',headerLeft:null}}



      />
    

    </Stack.Navigator>
  )
}
export default class App extends React.Component {

  render() {
  
      return (
     
<NavigationContainer>
  <MyStack/>
</NavigationContainer>
      
      );
    } 
}





