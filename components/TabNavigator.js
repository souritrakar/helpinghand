import React from "react"
import {Ionicons} from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NgoListScreen from "../screens/NgoListScreen"
import { Home, Forum,NgoList } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
              iconName = focused
                  ? 'md-home'
                  : 'md-home';
          } else if (route.name === 'Forum') {
              iconName = focused ? 'md-chatbubbles' : 'md-chatbubbles';
          }
          else if(route.name === "NGOs"){
            iconName= focused ? 'ios-list-box' : 'ios-list'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
      },
  })}
  tabBarOptions={{
      activeTintColor: '#42C0FB',
      inactiveTintColor: 'gray',
  }}>
      <Tab.Screen  name="Home" component={Home} />
    
      <Tab.Screen name="NGOs" component={NgoList}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;