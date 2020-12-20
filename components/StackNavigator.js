
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NgoListScreen from "../screens/NgoListScreen"
import GeneralForum from "../screens/GeneralForum"
import RequestsScreen from "../screens/RequestsScreen"
import PostRequestScreen from "../screens/PostRequestScreen";



const Home = () => {
  return (

 <RequestsScreen/>
    
   
  );
}

const Forum = () => {
  return (
   <GeneralForum/>
  );
}
const NgoList= ()=>{
  return(
    <NgoListScreen/>
  )
}


export { Home, Forum,NgoList};