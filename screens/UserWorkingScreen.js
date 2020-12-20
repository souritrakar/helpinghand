
import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform,TouchableOpacity,BackHandler,ScrollView,Button } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
import Custombutton from "../components/Custombutton"
import Custominput from "../components/Custominput"
import Icon from 'react-native-vector-icons/Octicons';
import AntIcon from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from "@react-navigation/native";


import DrawerNav from "../components/DrawerNavigation"
import { Ionicons } from '@expo/vector-icons';





export default class NgoWorkingScreen extends React.Component{

  constructor(){
    super()

  }

  render(){

    return(


  <DrawerNav/>

         
    )
  }
}






