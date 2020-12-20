import React from "react"
import {Text,View,ActivityIndicator, Dimensions,ScrollView,SafeAreaView,Linking,Button,StyleSheet} from "react-native"
import firebase from "../database/firebase"
import {Card} from "react-native-paper"
import {LinearGradient} from "expo-linear-gradient"
import Custombutton from "../components/Custombutton"
export default class NgoListScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            ngos:[],
            location:'',
            loaded:false,
            ngolength:'',
            city:"",
            mobilenumber:"",
            name:"",
            email:"",
            password:""
        }
    }

    componentDidMount(){

        firebase.auth().onAuthStateChanged(user=>{
            if(user){
            this.setState({email:user.email})
            this.setState({password:user.password})
            console.log(user.displayName)
           console.log( user.uid)

           firebase.firestore().collection("AppUsers").doc(user.email).get().then(snapshot=>{
               var tempcity=snapshot.data().City
            this.setState({city:snapshot.data().City})
            console.log(snapshot.data().City)
            console.log(snapshot.data().displayCity)
            return firebase.firestore().collection("AppUsers").where("type",'==',"NGO").where("City","==",snapshot.data().City).onSnapshot(snapshot=>{
                const ngos=[]
                snapshot.forEach(doc=>{
    
                    ngos.push(doc.data())
                    console.log(doc.data())
                })
                this.setState({ngos:ngos})
                this.setState({loaded:true})
                this.setState({ngolength:ngos.length})
            })
    })
            }
            else{
                alert("No user signed in ")
            }
           

})
    
      
    }
    render(){
        if(!this.state.loaded){
            return(
                <ActivityIndicator style={{alignContent:"center"}} size={30}/>
            )
        }
        else if (this.state.loaded===true){
        return(
  
            <ScrollView>
            <LinearGradient
        colors={['#FFEEEE', '#DDEFBB']}
    
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        
                <Text style={{fontFamily:"Raleway-Bold",fontSize:Dimensions.get("window").width/15,marginTop:Dimensions.get("window").height/25,marginBottom:Dimensions.get("window").height/15,textAlign:"center"}}>NGOs on the platform!</Text>
                <Text style={{fontFamily:'Raleway-Light',textAlign:"center",marginBottom:Dimensions.get("window").height/17}}>The NGOs and requests are filtered according to your location</Text>
                { this.state.ngos &&
                this.state.ngos.map(ngo=>{
                
                    return(
                        <LinearGradient
                        colors={['#bfe9ff', '#ECE9E6']}
                    
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                      >
        
                       <Card style={{paddingTop:20,paddingBottom:25,}} >
                 
                           <Text   numberOfLines={1}style={{fontFamily:'Raleway-Bold',fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                               Name: {ngo.Name}{'\n'}

                           </Text>
                           <Text> {'\n'}</Text> 
                           <Text numberOfLines={1} style={{fontFamily:'Raleway-Bold',fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                               Location: {ngo.displayCity}
                           </Text>
                           <Text> {'\n'}</Text> 
                           <Text numberOfLines={1}style={{fontWeight:"bold",fontSize:Dimensions.get("window").width/20,marginLeft:Dimensions.get("window").width/14}}>
                               Mobile : {ngo.mobilenumber}
                           </Text>
                         
                       </Card>
                
                      
                     <Text> {'\n'}</Text> 
                     </LinearGradient>
                   
                       
                        
                    )
                })


                }
          
          {
                this.state.ngos.length===0 &&
                (
                    <Text style={{fontFamily:'Raleway-Light',textAlign:"center"}}>No NGOs have registered yet</Text>
                )
            }
                </LinearGradient>
             
            </ScrollView>
     
        )
            }
    }
}