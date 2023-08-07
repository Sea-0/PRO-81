import React, { Component } from 'react';
import { Text, View,StyleSheet,SafeAreaView,Platform,StatusBar,Image,ScrollView,TextInput } from 'react-native';
import {RFValue} from "react-native-font-size";
import{DropDownPicker} from "react-native"


export default class CreatePost extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Criar Post</Text>
            </View>
        )
    }
}