
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



import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'



import Detail from './components/Detail'
import Feed from './components/Feed'
import Login from './components/Auth/login'


import Screen1 from './components/DrawerScreens/Screen1'
import Screen2 from './components/DrawerScreens/Screen2'
import Screen3 from './components/DrawerScreens/Screen3'

import Tab1 from './components/Tab Screens/Tab1'
import Tab2 from './components/Tab Screens/Tab2'
import Tab3 from './components/Tab Screens/Tab3'

import menu from './assets/images/menu.png'


const DrawerItems = createDrawerNavigator({



  Home: {
    screen: Feed
  },

  Contacts: {
    screen: Screen1

  },
  Recipes: {
    screen: Screen2
  },

  Settings: {
    screen: Screen3
  },


})


const TabItems = createMaterialTopTabNavigator({

  FirstTab: {
    screen: Tab1,
    navigationOptions: {
      title: "Tab1"
    }
  },
  SecondTab: {
    screen: Tab2,
    navigationOptions: {
      title: "Tab2"
    }
  },
  ThirdTab: {
    screen: Tab3,
    navigationOptions: {
      title: "Tab3"
    }
  },

}, {
  defaultNavigationOptions: (props) => {

    return {

      headerStyle: { backgroundColor: "green" },
      //title: props.navigation.state.routes[props.navigation.state.index].routeName,
      headerTintColor: "white",
      headerLeft: () => {

        return (

          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <Image source={menu}
              style={{ marginLeft: 8, tintColor: "white" }}
            />
          </TouchableOpacity>
        )




      }
    }

  }

}

 

)

const DrawerStackNavigator = createStackNavigator({

  DrawerRoute: {
    screen: DrawerItems
  }


},
  {
    defaultNavigationOptions: (props) => {

      return {

        headerStyle: { backgroundColor: "green" },
        title: props.navigation.state.routes[props.navigation.state.index].routeName,
        headerTintColor: "white",
        headerLeft: () => {

          return (

            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Image source={menu}
                style={{ marginLeft: 8, tintColor: "white" }}
              />
            </TouchableOpacity>
          )




        }
      }

    }

  }

)

const AppStack = createStackNavigator({

  DrawerRoute: {

    screen: DrawerStackNavigator,

    navigationOptions: {
      headerShown: false
    },
  },



  DetailRoute:{

    screen:Detail,
    navigationOptions:(props)=>{

        return (
          {
            headerStyle:{backgroundColor:"green"},
            title:"Menus",
            headerTintColor:"white"
          }
        )

    }

  } ,
  TabRoute:TabItems


})


const AuthStack = createStackNavigator({

  LoginRoute: {

    screen: Login,
    navigationOptions: {
      headerShown: false
    },


  }




})





export default createAppContainer(createSwitchNavigator({

  Auth: AuthStack,
  App: AppStack

}));
