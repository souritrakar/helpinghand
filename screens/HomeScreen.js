import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform,SafeAreaView,ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
import Custombutton from "../components/Custombutton"
let customFonts; 

let mainfont;
if(Platform.OS=='android'){
customFonts= {
    'ZillaSlab': require('../assets/fonts/ZillaSlab-Bold.ttf'),
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    'Oswald-VariableFont_wght':require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
    'Raleway-Bold':require("../assets/fonts/Raleway-Bold.ttf"),
    'Raleway-Light':require("../assets/fonts/Raleway-Light.ttf")
  };
  mainfont="ZillaSlab"
}
else{
    
    customFonts={
        'Inter-Black': require('../assets/fonts/Inter-Black-slnt=0.ttf'),
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    'Oswald-VariableFont_wght':require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
    'Raleway-Bold':require("../assets/fonts/Raleway-Bold.ttf"),
    'Raleway-Light':require("../assets/fonts/Raleway-Light.ttf")
    }
    mainfont="Inter-Black"
    
}




export default class HomeScreen extends React.Component {


constructor(props){
  super(props)

}

  state = {
    fontsLoaded: false,
    headingfont:""
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();

  }

  render() {
    if (this.state.fontsLoaded) {
      return (
     
     <SafeAreaView>
       <ScrollView>
         <LinearGradient
        colors={['#ADA996', '#F2F2F2','#DBDBDB',"#EAEAEA"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >

        <Text style={styles.appheading}>Helping Hand</Text>
        <Image
        source={require('../assets/helpinglogo.jpg')}
        style={styles.logo}
        />

        <Custombutton
        buttonTitle="REGISTER AS NGO"
        buttonContainer={styles.ngoregister}
        onPress={()=>{this.props.navigation.navigate("NgoRegisterScreen")}}
        />

<Custombutton
onPress={()=>{this.props.navigation.navigate("UserRegisterScreen")}}
        buttonTitle="REGISTER AS USER"
        buttonContainer={styles.userregister}
        
        
        />





            <Custombutton onPress={()=>{this.props.navigation.navigate('LoginScreen')}}  buttonContainer={styles.login} buttonTitle="LOGIN"  />

         
 

        </LinearGradient>
        </ScrollView>
        </SafeAreaView>
      
      );
    } else {
      return <AppLoading />
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
    fontFamily:mainfont,
    fontSize:Dimensions.get("window").width/11.5,
    marginTop:Dimensions.get("window").height/25
  },
  logo:{
width:Dimensions.get("window").width/2.21,
height:Dimensions.get("window").height/4.3,
borderRadius:100,
marginTop:Dimensions.get("window").height/14
  },
  ngoregister: {
    marginTop: Dimensions.get("window").height/10,
    width: '67%',
    height: Dimensions.get("window").height / 15,
    backgroundColor: '#FF5F6D',
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
    shadowOpacity:5
  },
  login: {
    marginTop: Dimensions.get("window").height/15,
    width: '67%',
    height: Dimensions.get("window").height / 15,
backgroundColor:"#1D976C",
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:Dimensions.get("screen").height/10
  },
  userlogin: {
    marginTop: Dimensions.get("window").height/15,
    width: '67%',
    height: Dimensions.get("window").height / 15,
backgroundColor:"#FFC371",
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,

  },


});
