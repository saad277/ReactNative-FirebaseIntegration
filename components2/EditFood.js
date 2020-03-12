
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

import EditFood1 from './editFood1'




class EditFood extends Component {





    state = {


        id: "",
       
        currentSubIngredient: null,
        subIngredients: ["bread", "meat", "vegetables"]
    }


    UpdateFood = (name, category) => {

        firebase.firestore().collection("food").doc(this.state.id).update({

            name: name,
            category: category,
            subIngredients: this.state.subIngredients,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()

        })
        
        
        // .catch((error) => console.log(error))

        //     .then((snapshot) => snapshot.get()).then((foodData) => {   //refresh front end
        //         console.log(foodData.data())

        //         let temp = foodData.data();

        //         this.setState({

        //             foods: [...this.state.foods, temp]
        //         })

        //         console.log(this.state)

        //     }).catch((error) => console.log(error))

    }


    componentDidMount() {

        this.setState({

            id: this.props.navigation.getParam("id")

        })


    }





    render() {

        console.log("working")
        console.log(this.state.id)


        return (

            <EditFood1

                updateFood={this.UpdateFood}
            />


        )


    }











}

export default EditFood;
