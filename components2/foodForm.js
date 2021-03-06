
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

import ImagePicker from './imagePicker'




class FoodForm extends Component {

  static navigationOptions = ({ navigation }) => {

    return {

      title: "New Food"
    }


  }

  state = {

    foodName: "",
    category: "",
    currentSubIngredient: null,
    subIngredients: ["bread", "meat", "vegetables"]
  }


  setFoodImage = (image) => {

    this.props.setFieldValue("imageUri", image)

    

  }




  render() {

        
       

    return (
      <View style={styles.container}>
        <ImagePicker onImagePicked={this.setFoodImage} />
        <TextInput
          style={styles.longFormInput}
          placeholder="Name"
          onChangeText={(text) => this.props.setFieldValue("name", text)}
        />
        <Text style={styles.validationText}>{this.props.errors.name}</Text>
        <TextInput
          style={styles.longFormInput}
          placeholder="Category"
          onChangeText={(text) => this.props.setFieldValue("category", text)}
        />
        <Text style={styles.validationText}>{this.props.errors.category}</Text>


        <View style={styles.row}>
          <TextInput placeholder="Ingredient" style={styles.formInput}
            onChangeText={(text) => this.setState({ food: text })}
            value={this.state.food}
          />

          <Button title="Submit" onPress={() => this.props.handleSubmit()} style={styles.btn} />
        </View>
      </View>


    )





  }








}

const styles = StyleSheet.create({

  row: {

    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32


  },
  container: {

    width: 300,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 32

  },

  formInput: {

    borderColor: "#B5B4BC",
    borderWidth: 1,
    padding: 8,
    height: 50,
    width: "75%"

  },
  longFormInput: {

    width: "100%",
    height: 50,
    borderColor: "#B5B4BC",
    borderWidth: 1,
    padding: 8,
    margin: 16,
  }


})





export default withFormik({

  mapPropsToValues: () => {

    return {
      name: "",
      category: "",
      imageUri: null

    }
  },
  validationSchema: (props) => yup.object().shape({
    name: yup.string().max(30).required(),
    category: yup.string().max(15).required(),

  }),
  handleSubmit: (values, { props }) => {

    //console.log(values)

   // props.addFood(values.name, values.category)

   
   console.log("values.......")
   
   console.log(values.name);
   console.log(values.category)
   
   props.uploadFood(values,{updating:true})





  }

})(FoodForm)