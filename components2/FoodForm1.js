
import React, { Component } from 'react';
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
    Alert
} from 'react-native';

import firebase from 'react-native-firebase'

import { withFormik } from 'formik'
import * as yup from 'yup';

import FoodForm from './foodForm'




class FoodForm1 extends Component {


    state = {

        foodName: "",
        category: "",
        currentSubIngredient: null,
        subIngredients: ["bread", "meat", "vegetables"]
      }
    

    addFood = (name, category) => {

        firebase.firestore().collection("food").add({
    
          name: name,
          category: category,
          subIngredients: this.state.subIngredients,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
    
        }).catch((error) => console.log(error))
    
        .then((snapshot) => {
          
          name.id=snapshot.id           //document snapshot id
          snapshot.set(name)
        
        })
        .then((foodData) => {   //refresh front end
          console.log(foodData.data())
    
          let temp = foodData.data();
    
          this.setState({
    
            foods: [...this.state.foods, temp]
          })
    
          console.log(this.state)
    
        }).catch((error) => console.log(error))
    
      }


      uploadFoodImage=(name,{updating})=>{

          if(name.imageUri){

                const fileExtension=name.imageUri.split(".").pop()
                console.log(fileExtension)
          }


      }

    render() {

        return (

            <FoodForm 
            
            addFood={this.addFood}
            />

        )


    }











}

export default FoodForm1;
