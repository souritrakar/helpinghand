import React from "react"

import {Text,View,ActivityIndicator, Dimensions,ScrollView,SafeAreaView,Button, Linking, Image,StyleSheet,Modal,TextInput} from "react-native"
import {Card} from "react-native-paper"
import {LinearGradient} from "expo-linear-gradient"
import firebase from "../database/firebase"
import { NgoList } from "../components/StackNavigator"
import Custombutton from "../components/Custombutton"
import {Ionicons} from "@expo/vector-icons"
import Custominput from "../components/Custominput"
import {Button as IconButtonComponent} from 'react-native-paper';
var uuid = require('react-native-uuid');
export default class RequestsScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            requests:[],
            email:"",
            password:"",
            city:"",
            mobilenumber:"",
            name:"",
            isUser:null,
            modalVisible:false,
            value:"",
            requestlocation:"",
            request:"",
            displayCity:""
            
        }
    }

     componentDidMount(){
    firebase.auth().onAuthStateChanged(cred=>{
        if(cred){
            this.setState({email:cred.email})
            console.log(cred.email)
            firebase.firestore().collection("AppUsers").doc(this.state.email).get().then(doc=>{
                if(doc.data().type=="NGO"){
                    this.setState({isUser:false})
                    return firebase.firestore().collection("Requests").where("City","==",doc.data().City).onSnapshot(snapshot=>{
                        const requests=[]
                        snapshot.forEach(doc=>{
                            requests.push(doc.data())
                        })
                        this.setState({requests:requests})
                    })
                }
                else{
                    this.setState({isUser:true})
                    this.setState({name:doc.data().Name})
                    this.setState({city:doc.data().City})
                    this.setState({displayCity:doc.data().displayCity})
                    console.log(doc.data().Name)
                    return firebase.firestore().collection("Requests").where("City","==",doc.data().City).onSnapshot(snapshot=>{
                        const requests=[]
                        snapshot.forEach(doc=>{
                            requests.push(doc.data())
                        })
                        this.setState({requests:requests})
                    })
                }
            })
      
        }
        else{
            alert("Error")
        }
    })
    console.log(this.state.modalVisible)
    


   
    
}
addRequest=(request,requestlocation,name)=>{
    firebase.firestore().collection("Requests").add({
        request:request,
        requestlocation:requestlocation,
        sender:name,
        City:this.state.city,
        displayCity:this.state.displayCity
    }).then(()=>{
        this.setState({modalVisible:false})
    })
}

    render(){
        return(
            <ScrollView>
               

            {
                this.state.isUser===true &&
                (
                    
                    <LinearGradient
                    colors={['#FFEEEE', '#DDEFBB']}
                
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >   
                                     
  <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>

      <View>
      <IconButtonComponent icon={({ size, color }) => (
    <Image
      source={require('../assets/arrow-down.png')}
      style={{ width: 30, height: 30,marginBottom:Dimensions.get("window").height/15 }}
    />
      )} onPress={()=>{this.setState({modalVisible:false})}}/>
          <Custominput onChangeText={(text)=>{this.setState({request:text})}} placeholderText="Enter Request"  />
          <Custominput placeholderText="Enter current location" onChangeText={(text)=>{this.setState({requestlocation:text})}}/>
          <Custombutton buttonTitle="Make Request" buttonContainer={styles.locationbutton} onPress={()=>{this.addRequest(this.state.request,this.state.requestlocation,this.state.name)}} />
        
      </View>
  </Modal>
               
                            <Text style={{fontFamily:"Raleway-Bold",fontSize:Dimensions.get("window").width/15,marginTop:Dimensions.get("window").height/25,marginBottom:Dimensions.get("window").height/15,textAlign:"center"}}>Requests by the app users!</Text>
                            
      {  /*  <IconButtonComponent size={30}  onPress={()=>{this.setState({modalVisible:true})}} icon={({ size, color }) => (
    <Image
      source={require('../assets/plus-circle-outline.png')}
      style={{ width: 30, height: 30,marginBottom:Dimensions.get("window").height/15 }}
    />
      )}/>*/}
          <IconButtonComponent icon={({ size, color }) => (
    <Image
      source={require('../assets/plus-circle-outline.png')}
      style={{ width: 30, height: 30,marginBottom:Dimensions.get("window").height/15 }}
    />
      )} onPress={()=>{this.setState({modalVisible:true})}}/>
 
                            { this.state.requests &&
                            this.state.requests.map((request,i)=>{
                            
                                return(
                                    <LinearGradient
                                    colors={['#bfe9ff', '#ECE9E6']}
                                
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    key={i}
                                  >
                                      
                    
                                   <Card style={{paddingTop:20,paddingBottom:25,}} >
                             
                                       <Text   numberOfLines={1}style={{fontFamily:'Raleway-Bold',fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                                           Request : {request.request}{'\n'}
            
                                       </Text>
                                       <Text> {'\n'}</Text> 
                                       <Text numberOfLines={1} style={{fontFamily:'Raleway-Bold',fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                                          Name : {request.sender}
                                       </Text>
                                       <Text> {'\n'}</Text> 
                                       <Text numberOfLines={1}style={{fontWeight:"bold",fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                                          City : {request.displayCity}
                                       </Text>
                                       
                                       
                                        <Text>{'\n'}</Text>
                                        <View style={{flex: 1,justifyContent: "center",}}>
                                 

                                        </View>         
                                        
                                   </Card>
                                  
                                 <Text> {'\n'}</Text> 
                                 </LinearGradient>
                               
                                   
                                    
                                )
                            })
            
            
                            }
                          
 
                            </LinearGradient>
                )
            }


            {
                this.state.isUser===false &&
                (
                    
                    <LinearGradient
                    colors={['#FFEEEE', '#DDEFBB']}
                
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >   
               
                            <Text style={{fontFamily:"Raleway-Bold",fontSize:Dimensions.get("window").width/15,marginTop:Dimensions.get("window").height/25,marginBottom:Dimensions.get("window").height/15,textAlign:"center"}}>Requests by the app users!</Text>
                   
        
                            { this.state.requests &&
                            this.state.requests.map((request,i)=>{
                            
                                return(
                                    <LinearGradient
                                    colors={['#bfe9ff', '#ECE9E6']}
                                
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    key={i}
                                  >
                    
                                   <Card style={{paddingTop:20,paddingBottom:25,}} >
                             
                                       <Text   numberOfLines={1}style={{fontFamily:'Raleway-Bold',fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                                           Request : {request.request}{'\n'}
            
                                       </Text>
                                       <Text> {'\n'}</Text> 
                                       <Text numberOfLines={1} style={{fontFamily:'Raleway-Bold',fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                                          Name : {request.sender}
                                       </Text>
                                       <Text> {'\n'}</Text> 
                                       <Text numberOfLines={1}style={{fontWeight:"bold",fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                                          City : {request.displayCity}
                                       </Text>
                                       
                                       
                                        <Text>{'\n'}</Text>
                                        <View style={{flex: 1,justifyContent: "center",}}>
                                      
                                        <Custombutton buttonTitle="OPEN LOCATION" buttonContainer={styles.locationbutton} onPress={()=>{Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + request.requestlocation)}}/>
                                        </View>                       
                                   </Card>
                                  
                                 <Text> {'\n'}</Text> 
                                 </LinearGradient>
                               
                                   
                                    
                                )
                            })
            
            
                            }
                          
                   
                            </LinearGradient>
                )
            }
            {
                this.state.requests.length===0 &&
                (
                    <Text style={{fontFamily:'Raleway-Light',textAlign:"center"}}>No requests have been posted yet</Text>
                )
            }

           
   
            </ScrollView>
        )
    }
}

const styles= StyleSheet.create({
    locationbutton:{

        width: '67%',
        height: Dimensions.get("window").height / 18,
    backgroundColor:"green",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginLeft:Dimensions.get('window').width/6,
        marginTop:Dimensions.get("window").height/20
    },
addrequest:{
    width: Dimensions.get("window").width/7,
    height: Dimensions.get("window").height / 14,
backgroundColor:"green",
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,

    
},
modalView:{
    alignItems: "center", 
        justifyContent: "center", 
        position: "absolute", 
        top: "50%", 
        left: "50%", 
        elevation: 5, 

        height: 180, 

        backgroundColor: "#fff", 
        borderRadius: 7, 
},
textInput:{
    width: "80%", 
    borderRadius: 5, 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    borderColor: "rgba(0, 0, 0, 0.2)", 
    borderWidth: 1, 
    marginBottom: 8, 
}

})