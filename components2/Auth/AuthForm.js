import React, { Component } from 'react'



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

import { withFormik } from 'formik'
import * as yup from 'yup';

import firebase from 'react-native-firebase'


const login = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password).
        then((value) => {
            console.log(value)

        })

}

const signUp = (email, password, displayName) => {

    firebase.auth().createUserWithEmailAndPassword(email, password).
        then((userInfo) => {

            console.log(userInfo);
        })

}







const AuthForm = (props) => {

    console.log(props)

    const DisplayNameInput = () => {

        return (

            <View>
                <TextInput
                    placeholder="Display Name"
                    style={styles.formInput}
                    onChangeText={(text) => props.setFieldValue("displayName", text)}
                />
                <Text style={styles.validationText}>{props.errors.displayName}</Text>
            </View>

        )


    }




    return (


        <View style={styles.container}>
            <Text h3 style={styles.header}>Firebase Auth </Text>
            {props.authMode === "signup" ? <DisplayNameInput /> : null}

            <TextInput
                style={styles.formInput}
                onChangeText={(text) => props.setFieldValue("email", text)}
                placeholder="Email"

            />
            <Text style={styles.validationText}>{props.errors.email}</Text>

            <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                onChangeText={(text) => props.setFieldValue("password", text)}
                placeholder="password"

            />
            <Text style={styles.validationText}>{props.errors.password}</Text>

            <Button
                backgroundColor="transparent"
                title={props.authMode === "login" ? "Login" : "Create Account"}
                buttonStyle={styles.loginButton}
                onPress={() => props.handleSubmit()}
            />

            <Button
                backgroundColor="transparent"
                color="black"
                title={props.authMode === "login" ? "Switch To Signup" : "Switch To Login"}
                buttonStyle={styles.switchButton}
                onPress={() => props.switchAuthMode()}
            />


        </View>

    );



}




const styles = StyleSheet.create({

    header: {
        marginBottom: 60,
        fontSize: 40
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    validationText: {
        marginTop: 8,
        marginBottom: 16,
        color: 'red',
        alignSelf: 'center'
    },
    formInput: {
        width: 300,
        height: 50,
        borderColor: '#B5B4BC',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8
    },
    loginButton: {
        width: 200,
        marginBottom: 16,
        backgroundColor: '#6f37be',
    },
    switchButton: {
        width: 200,
        backgroundColor: '#3f51b5'
    },
    Button: {

        width: 200,
        marginBottom: 16
    }


})





export default withFormik({

    mapPropsToValues: () => {

        return {
            email:"",
            password:"",
            displayName:"",
        }
    },
    validationSchema: (props) => yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        //displayName: props.authMode == "signup" ?  yup.string().min(5).required() : null
    }),
    handleSubmit: (values, props) => {

        console.log(values)
        props.authMode === 'login' ? login(values.email,values.password) :signUp(values.email,values.password)
    }

})(AuthForm)