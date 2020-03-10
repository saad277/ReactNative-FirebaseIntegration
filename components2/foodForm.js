
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
    TouchableOpacity
} from 'react-native';

import firebase from 'react-native-firebase'







class FoodForm extends Component {


    state={

        food:"",
        color:"",

    }



    addFood = (name, color) => {

        firebase.firestore().collection("food").add({
    
          name: name,
          color: color,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
    
        }).then((snapshot) => snapshot.get()).then((foodData) => {   //refresh front end
          console.log(foodData.data())
    
          let temp = foodData.data();
    
          this.setState({
    
            foods: [...this.state.foods, temp]
          })
    
          console.log(this.state)
    
        }).catch((error) => console.log(error))
    
      }




    render() {

        return (
            <View>
                  <View>
          <TextInput placeholder="AddFOOD" style={styles.input}
            onChangeText={(text) => this.setState({ food: text })}
            value={this.state.food}
          />
          <TextInput placeholder="Color1" style={styles.input}
            onChangeText={(text) => this.setState({ color: text })}
            value={this.state.color}
          />
          <Button title="Submit" onPress={() => this.addFood(this.state.food, this.state.color)} style={styles.btn} />
        </View>
            </View>


        )





    }








}

const styles = StyleSheet.create({




})





export default FoodForm;