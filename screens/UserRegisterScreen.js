
import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform ,TouchableOpacity,ToastAndroid,ActivityIndicator,ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
import Custombutton from "../components/Custombutton"
import Custominput from "../components/Custominput"
import firebase from "../database/firebase"

export default class UserRegisterScreen extends React.Component{

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

    signUp=(email,password)=>{
      firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        this.props.navigation.navigate("HomeScreen")
        this.setState({buttonPressed:true})
        this.setState({loading:false})

        firebase.firestore().collection("AppUsers").doc(email).set({

          Name:this.state.name,
          City:this.state.city.toLowerCase(),
          email:this.state.email,
          password:this.state.password,
          type:"NormalUser",
          displayCity:this.state.city,
          mobilenumber:this.state.mobilenumber
        })
      }).catch(err=>{
       alert(err)
      })
    }
    isFormValid = () => {
      const {name,  email, password, city,mobilenumber} = this.state
    
      return name &&  email && password && city && mobilenumber
    }
    render(){

      

      if(this.state.buttonPressed&&!this.state.loading){
        return(
          <ActivityIndicator size="large" />
        )
      }
      else{

    
        return(
          <ScrollView>
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
<Custominput 
 iconType="lock"
 keyboardType="default"
 autoCapitalize="none"
 autoCorrect={false}
placeholderText="Enter Name"

/>
                
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
<Custominput 
 iconType="mobile1"
 keyboardType="number-pad"
 autoCapitalize="none"
 autoCorrect={false}
placeholderText="Enter Mobile Number"
onChangeText={(text)=>this.setState({mobilenumber:text})}

/>
<Custominput 

 keyboardType="default"
 autoCapitalize="none"
 autoCorrect={false}
placeholderText="Enter City"
onChangeText={(text)=>this.setState({city:text})}

/>

<Custombutton disabledprop={!this.state.email || !this.state.password || !this.state.city || !this.state.mobilenumber || !this.state.name } buttonContainer={styles.login} buttonTitle="REGISTER" onPress={()=>{this.signUp(this.state.email,this.state.password)}} />

            </LinearGradient>
            </ScrollView>
        )
      }
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