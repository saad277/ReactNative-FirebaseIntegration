
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









class App extends Component {


  state = {

    foods: [],
    food:"",
    color:""

  }

   addFood = (name,color) => {

    firebase.firestore().collection("food").add({
  
      name: name,
      color: color,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
  
    }).then((snapshot) => snapshot.get()).then((foodData)=>{   //refresh front end
      console.log(foodData.data())

        let temp=foodData.data();

      this.setState({

          foods:[...this.state.foods,temp]
      })

      console.log(this.state)
    
    }).catch((error)=>console.log(error))
  
  }
  





  componentDidMount() {

    const getFood = async () => {

      var foodList = []

      var snapshot = await firebase.firestore().collection("food").get();

      

      snapshot.forEach((doc) => {


        foodList.push(doc.data())

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
          <TextInput placeholder="AddFOOD" style={styles.input} 
          onChangeText={(text)=>this.setState({food:text})}
          value={this.state.food}
          />
          <TextInput placeholder="Color1" style={styles.input} 
          onChangeText={(text)=>this.setState({color:text})} 
          value={this.state.color}
          />
          <Button title="Submit" onPress={()=>this.addFood(this.state.food,this.state.color)} style={styles.btn}/>
        </View>
        <View>
        <FlatList
        data={this.state.foods}
        renderItem={({item})=>{

        return(
        <TouchableOpacity><Text style={styles.item}>{item.name}{"\n"}{item.color}</Text>
     
      </TouchableOpacity>   
        )

        }}
        />

        </View>

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
  item:{
    backgroundColor: 'lightgrey',
    padding: 20,
    
    borderBottomWidth:2,
    borderBottomColor:"black"
   
  },
  btn:{

    marginVertical:10


  }

});

export default App;
