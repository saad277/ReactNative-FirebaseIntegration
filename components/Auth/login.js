
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

import {styles} from '../../styles/styles'


class Login extends Component {



    render() {
        console.log(this.props)
        return (

            <View style={styles.center}>
                <Text>Login</Text>

                <Button
                    onPress={() => this.props.navigation.navigate("App")}
                    title="lOGIN" />
            </View>
        )

    }



}




export default Login;