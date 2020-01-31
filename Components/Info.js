import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

const users = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        description:"The idea with React Native Elements is more about component structure than actual design."
    },
    
]

export default class Info extends Component {
    render() {
        return (
        
            <Card title="DESCRIPTION">
                {
                    users.map((u, i) => {
                        return (
                            <View key={i} style={styles.user}>
                                <Image
                                    leftAvatar={{source: {uri: u.avatar_url}}}
                                />
                                <Text style={styles.name}>{u.name}</Text>
                                <Text style={styles.description}>{u.description}</Text>
                           </View>
                        );
                    })
                }
            </Card>
        
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
    description: {
        marginTop:20
    }
})
