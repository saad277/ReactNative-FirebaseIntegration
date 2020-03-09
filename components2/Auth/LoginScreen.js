import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

import AuthForm from '../Auth/AuthForm'

import firebase from 'react-native-firebase'




class LoginScreen extends Component {



state={
    authMode:"login",
    user:""
}

switchAuthMode=()=>{

    if(this.state.authMode=="login"){

            this.setState({

                        authMode:"signup"
            })
    


    } else {
        this.setState({

            authMode:"login"
        })
    }

    }



    componentDidMount(){

        firebase.auth().onAuthStateChanged((user)=>{

            console.log(user)
            this.onAuthState(user)
        })


    }


    onAuthState=(user)=>{

        if(user!=null){

            this.props.navigation.navigate("App")
        }


    }


    render() {

        return (

            
            <AuthForm 
           
            authMode={this.state.authMode}
            switchAuthMode={this.switchAuthMode}
            />
    
)


    }



}


export default LoginScreen;