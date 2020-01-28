import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Edit extends Component {
    render() {
        return (
            <View style ={styles.container}>
                <Text>yep</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
})
