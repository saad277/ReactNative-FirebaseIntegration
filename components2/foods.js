
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
  Image
} from 'react-native';

import firebase from 'react-native-firebase'

import ActionButton from 'react-native-action-button'

import { ListItem, Divider } from 'react-native-elements'







class Foods extends Component {


  showActionButton = () => <ActionButton buttonColor="blue"
    onPress={() => this.props.navigation.navigate("FoodForm")}
  />










  static navigationOptions = ({ navigation }) => {





    return {

      title: "Food List",

      headerRight: () => {

        return (
          <Button
            title="logout"
            onPress={() => {

              firebase.auth().signOut().
                then(() => {

                  console.log("user signed out")
                  navigation.navigate("Auth")

                })
            }}
          />
        )

      }


    }



  }

  state = {

    foods: [],


  }







  componentDidMount() {

    const getFood = async () => {

      var foodList = []

      var snapshot = await firebase.firestore().collection("food").get();



      snapshot.forEach((doc) => {

        const foodItem = doc.data();
        foodItem.id = doc.id;                     // get id 

        foodList.push(foodItem);

      })

      this.setState({

        foods: [...foodList]

      })




    }



    getFood();


  }

  render() {



    return (

      <View style={styles.container}>



        <View>
          <FlatList
            data={this.state.foods}
            renderItem={({ item }) => {

              return (


                <ListItem
                  title={item.name}
                  subtitle={item.category}
                  leftAvatar={{

                    size: "large",
                    rounded: "false",
                    source: item.image && { uri: item.image }
                  }}

                  onPress={() => this.props.navigation.navigate("FoodDetail", item)}





                />

              )

            }}
          />



        </View>



        {this.showActionButton()}


      </View>




    );


  }



};

const styles = StyleSheet.create({

  container: {

    flex: 1

  },
  input: {

    borderColor: "black",
    borderWidth: 2,
    marginHorizontal: 4,
    marginVertical: 4
  },
  item: {
    backgroundColor: 'white',
    padding: 20,

    borderBottomWidth: 1,
    borderBottomColor: "black"

  },
  btn: {

    marginVertical: 10


  },


});

export default Foods;
