import React, { Component, useState ,useEffect} from 'react';
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
    Alert,
    Image
} from 'react-native';

import firebase from 'react-native-firebase'

import ImagePicker from 'react-native-image-picker'



const ImagePicker1 = ({ image, onImagePicked }) => {

    const [selectedImage, setSelectedImage] = useState();

    useEffect(()=>{

        if(image){

           // console.log(" useEffect : "+image);
            setSelectedImage({uri:image})
        }

    },[image])

    pickImageHandler = () => {

        const options = {

            title: "Pick an Image",
            maxWidth: 800,
            maxHeight: 600,

        }

        ImagePicker.showImagePicker(options, (response) => {

            //console.log(response)
            if (response.error) {

                console.log("Image Error....")

            } else {

                console.log("Image : PICKED" )
                setSelectedImage({ uri: response.uri })
                onImagePicked({ uri: response.uri })
            }


        })


    }




    return (

        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={selectedImage} style={styles.previewImage}/>
            </View>
            <View style={styles.button}>
                <Button title="Pick Image" onPress={() => pickImageHandler() } />
            </View>
        </View>

    )



}


const styles = StyleSheet.create({

    container: {

        width: "100%",
        alignItems: "center"
    },

    imageContainer: {

        borderWidth: 1,
        borderColor: "black",
        backgroundColor:"#eee",
        width: "80%",
        height: 150,

    },

    button: {
        margin: 8,
    },
    previewImage:{

        width:"100%",
        height:"100%",
    }



})



export default ImagePicker1;