import React from "react"
import firebase from "../database/firebase"
import {Image, Text, View,Dimensions} from "react-native"


export default class ProfileScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            displayCity:"",
            mobilenumber:"",
            name:""

        }
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
            this.setState({email:user.email})
            this.setState({password:user.password})
       
            firebase.firestore().collection("AppUsers").doc(user.email).get().then(doc=>{
                this.setState({displayCity:doc.data().displayCity})
                this.setState({mobilenumber:doc.data().mobilenumber})
                this.setState({name:doc.data().Name})
            })
      
           console.log( user.uid)
            }
            else{
                alert("No user signed in ")
            }
           

})
    }
    render(){
        return(
            <View>

                <Image  style={{width:Dimensions.get("window").width/2.21,
height:Dimensions.get("window").height/4.3,
borderRadius:110,
marginTop:Dimensions.get("window").height/14, alignSelf:"center"}}
source={require("../assets/defaultuser.jpg")}/>
                <Text numberOfLines={1} style={{fontFamily:"Raleway-Bold",fontSize:Dimensions.get("window").width/18,marginTop:Dimensions.get("window").height/10,marginLeft:Dimensions.get("window").width/18}}>Email : {this.state.email}</Text>

           
               <Text numberOfLines={1} style={{fontFamily:"Raleway-Bold",fontSize:Dimensions.get("window").width/18,marginTop:Dimensions.get("window").height/14,marginLeft:Dimensions.get("window").width/18}}>Name : {this.state.name}</Text>
                <Text numberOfLines={1} style={{fontFamily:"Raleway-Bold",fontSize:Dimensions.get("window").width/18,marginTop:Dimensions.get("window").height/12,marginLeft:Dimensions.get("window").width/18}}>Mobile : {this.state.mobilenumber}</Text>
               
                <Text numberOfLines={1} style={{fontFamily:"Raleway-Bold",fontSize:Dimensions.get("window").width/18,marginTop:Dimensions.get("window").height/12,marginLeft:Dimensions.get("window").width/18}}>City : {this.state.displayCity}</Text>
            </View>
        )
    }
}