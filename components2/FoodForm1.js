
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

import { v1 as uuidv1 } from 'uuid';



import FoodForm from './foodForm'




class FoodForm1 extends Component {


    state = {

        foodName: "",
        category: "",
        currentSubIngredient: null,
        subIngredients: ["bread", "meat", "vegetables"]
      }
    

    addFood = (name, category,url) => {

        firebase.firestore().collection("food").add({
    
          name: name,
          category: category,
          subIngredients: this.state.subIngredients,
          image:url,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
    
        }).catch((error) => console.log(error))
    
        // .then((snapshot) => {
          
        //   name.id=snapshot.id           //document snapshot id
        //   snapshot.set(name)
        
        // })
        // .then((foodData) => {   //refresh front end
        //   console.log(foodData.data())
    
        //   let temp = foodData.data();
    
        //   this.setState({
    
        //     foods: [...this.state.foods, temp]
        //   })
    
        //   console.log(this.state)
    
        // }).catch((error) => console.log(error))
    
      }


      uploadFoodImage=(name1,{updating})=>{                  // Upload

                let name=name1.imageUri;

                

                var fileName=name.uri.fileName;

                var path=name.uri.path;

                console.log("name")
                console.log(fileName)
                console.log(path)

              //  const fileExtension=name.split(".").pop()
             
               // console.log("file ext : "+fileExtension)


              //  var fileName="example."+fileExtension;

                


                var storageRef=firebase.storage().ref(`foodImages/${fileName}`);

                storageRef.putFile(path).
                on(
                  firebase.storage.TaskEvent.STATE_CHANGED,
                  (snapshot)=>{
                    console.log("snapshot :"+snapshot.state)
                    console.log("progress :"+(snapshot.bytesTransferred/snapshot.totalBytes)) 
                    
                    if(snapshot.state===firebase.storage.TaskState.SUCCESS) {
                      console.log("success")
                    }
                  },
                  (error)=>{

                    unsubscribe();
                    console.log("Image upload error"+error.toString())
                  },
                  ()=>{                                   //executes after task is finished
                      storageRef.getDownloadURL().
                      then((downloadUrl)=>{

                        console.log("File Available at : "+downloadUrl)


                        console.log(name1.name);
                        console.log(name1.category)

                        this.addFood(name1.name,name1.category,downloadUrl);
                        





                      })
                  }
                 
                  
                  
                  )

           


          
          


      }

    render() {

        return (

            <FoodForm 
            
            addFood={this.addFood}
            uploadFood={this.uploadFoodImage}
            />

        )


    }











}

export default FoodForm1;
