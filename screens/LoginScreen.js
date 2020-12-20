
import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform ,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
import Custombutton from "../components/Custombutton"
import Custominput from "../components/Custominput"
import firebase from "../database/firebase"
export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={

          email:"",
          password:"",
          mobilenumber:"",
          city:"",
          name:"",
          buttonDisabled:true,
          opacity:0.3,
          loading:false,
          buttonPressed:false
        }
    }

login=(email,password)=>{
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
  firebase.firestore().collection("AppUsers").doc(email).get().then(doc=>{
    if(doc.data().type=="NGO"){
      this.props.navigation.replace("NgoWorkingScreen")
    }
    else{
      this.props.navigation.replace("UserWorkingScreen")
    }
  })

  }).catch(err=>{
    alert(err)
  })
}
    render(){
        return(
            <LinearGradient
            colors={['#d9a7c7', '#fffcdc']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            
          >
         

<Image
        source={require('../assets/helpinglogo.jpg')}
        style={styles.logo}
        />
        <KeyboardAvoidingView>

                
<Custominput 
 iconType="user"
 keyboardType="email-address"
 autoCapitalize="none"
 autoCorrect={false}
placeholderText="Enter Email"
onChangeText={(text)=>this.setState({email:text})}

/>
<Custominput 
 iconType="lock"
 keyboardType="default"
 autoCapitalize="none"
 autoCorrect={false}
placeholderText="Enter Password"
onChangeText={(text)=>this.setState({password:text})}

/>
</KeyboardAvoidingView>
<Custombutton buttonContainer={styles.login} buttonTitle="LOGIN" onPress={()=>{this.login(this.state.email,this.state.password)}}/>

            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    
    },
  
    appheading:{
      
      fontSize:Dimensions.get("window").width/11.5,
      marginTop:Dimensions.get("window").height/15
    },
    logo:{
  width:Dimensions.get("window").width/2.21,
  height:Dimensions.get("window").height/4,
  borderRadius:100,
  marginTop:Dimensions.get("window").height/14,
  
    },
    ngoregister: {
      marginTop: Dimensions.get("window").height/10,
      width: '67%',
      height: Dimensions.get("window").height / 15,
      backgroundColor: '#2e64e5',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    userregister: {
      marginTop: Dimensions.get("window").height/20,
      width: '67%',
      height: Dimensions.get("window").height / 15,
      backgroundColor: '#2e64e5',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    login: {
      marginTop: Dimensions.get("window").height/15,
      width: '67%',
      height: Dimensions.get("window").height / 15,
  backgroundColor:"#93291E",
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
  
  
  });