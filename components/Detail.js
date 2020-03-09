
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

import {styles} from '../styles/styles'

class Detail extends Component {



    render() {

        return (

            <View style={styles.center}>
                <Text>Detail ---> Goto Tabs</Text>
                
                <Button
                onPress={()=>this.props.navigation.navigate("TabRoute")}
                title="Bottom Tab" />
            </View>
        )

    }



}





export default Detail;