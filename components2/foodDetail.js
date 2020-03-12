
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

import {Divider} from 'react-native-elements'

import firebase from 'react-native-firebase'
import foodForm from './foodForm';


class FoodDetail extends Component {


    static navigationOptions = ({ navigation }) => {

        return {

            title: "Detail",
          
        }


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


        return (

            <View style={styles.container}>
                <Text style={styles.headerText}>{name}</Text>
                <Text style={styles.categoryText}>Category : {category}</Text>
                <Text style={styles.ingredientText}>Ingredients</Text>
                {  ingredients===undefined || ingredients.length==0?<Text>None</Text>: 
                <FlatList
                data={ingredients}
                contentContainerStyle={styles.listContainer}
                ItemSeparatorComponent={()=><Divider style={{backgroundColor:"black"}}/>}
                scrollEnabled={false}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=> <Text style={styles.ingredientItemText}>{item}</Text> }
                />        

                
                
                }
                 <Button
                        onPress={() =>this.props.navigation.navigate("EditFood",{id:id})}
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
    }
  });






export default FoodDetail;