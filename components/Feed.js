
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


class Feed extends Component {



    render() {

        return (

            <View style={styles.center}>
                <Text>Feed </Text>
                <Button
                onPress={()=>this.props.navigation.navigate("DetailRoute")}
                title="Detail" />
            </View>
        )

    }



}





export default Feed;