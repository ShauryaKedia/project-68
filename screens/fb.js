import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FbScreen extends React.Component{
    render(){
        return(
            <View style={shaurya.container}>
                <Text> Facebook</Text>
            </View>
        )
    }
}

const shaurya = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})