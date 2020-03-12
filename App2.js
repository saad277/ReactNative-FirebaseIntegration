import React, { Component } from 'react'

import Foods from './components2/foods'
import FoodForm from './components2/FoodForm1'
import FoodDetail from './components2/foodDetail'
import EditFood from './components2/EditFood'

import LoginScreen from './components2/Auth/LoginScreen'

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

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'



const AppStack = createStackNavigator({

  FoodList:Foods,
  FoodForm:FoodForm,
  FoodDetail:FoodDetail,
  EditFood:EditFood,
  
  
 


})



const AuthNavigator = createStackNavigator({

  LoginRoute: {

    screen: LoginScreen,
    navigationOptions: () => {

      return {
        headerShown: false
      }

    }
  }

})


const AppContainer = createAppContainer(createSwitchNavigator({

  App: AppStack,
  Auth: AuthNavigator


}, {
  initialRouteName: "Auth"

}

))



class App2 extends Component {

  render() {

    return (

      <AppContainer />

    )

  }

}

export default App2;

