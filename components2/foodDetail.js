
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
  Image,
  Alert,
 
} from 'react-native';

import { Divider, Icon } from 'react-native-elements'

import firebase from 'react-native-firebase'
import foodForm from './foodForm';
import { abs } from 'react-native-reanimated';


class FoodDetail extends Component {


  static navigationOptions = ({ navigation }) => {

    return {

      title: "Detail",

    }


  }


  delete = (id) => {


        this.props.navigation.navigate("FoodList");

      firebase.firestore().collection("food").doc(id).delete()
      .then(()=>{



      }).catch((error)=>console.log(error))



  }


  render() {

    console.log(this.props.navigation.getParam("name"))
    console.log(this.props.navigation.getParam("category"))
    console.log(this.props.navigation.getParam("subIngredients"))
    console.log(this.props.navigation.getParam("id"))


    const name = this.props.navigation.getParam("name");
    const ingredients = this.props.navigation.getParam("subIngredients");
    const category = this.props.navigation.getParam("category");
    const id = this.props.navigation.getParam("id");
    const image = this.props.navigation.getParam("image");


    return (

      <View style={styles.container}>

        <View style={styles.row}>

          <Icon
            reverse
            name="android-create"
            type="ionicon"
            onPress={() => { }}
          />
          <Icon
            reverse
            name="android-trash"
            type="ionicon"
            color="#CA300E"
            onPress={() => Alert.alert("Delete", "Cannot undo",
              [{ text: "Cancel" }, { text: "Ok", onPress: () => this.delete(id) }], [{ cancalable: false }]
            )}
          />


        </View>


        <Text style={styles.headerText}>{name}</Text>
        <Image source={{uri:image}} style={styles.image} />
        <Text style={styles.categoryText}>Category : {category}</Text>
        <Text style={styles.ingredientText}>Ingredients</Text>
        {ingredients === undefined || ingredients.length == 0 ? <Text>None</Text> :
          <FlatList
            data={ingredients}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={() => <Divider style={{ backgroundColor: "black" }} />}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.ingredientItemText}>{item}</Text>}
          />



        }
        <Button
          onPress={() => this.props.navigation.navigate("EditFood", { id: id })}
          title="Edit"
        />
      </View>


    )




  }





}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    marginBottom: 32
  },
  image: {
    width: '100%',
    aspectRatio: 2,
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  categoryText: {
    fontSize: 20,
    marginBottom: 32
  },
  ingredientText: {
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 32
  },
  ingredientItemText: {
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 16
  },
  container: {
    alignItems: 'center'
  },
  listContainer: {
    borderWidth: 0.5,
    width: 200,
    borderColor: 'grey'
  },
  image:{
    width:200,
    height:160,
  }
});






export default FoodDetail;