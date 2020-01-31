import React, { Component } from 'react';
import { Text, View, Button, ImageBackground, } from 'react-native';
import { ListItem} from 'react-native-elements'

const users = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon:'heartbeat'
    },
]
export default class StudentList extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                {
                    users.map((l, i) => (
                        <ListItem
                            onPress={() => navigate('Info', { name: l.name })}
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.subtitle}
                            bottomDivider
                            rightIcon={{name:l.icon}}
                        />
                    ))
                }
            </View>  
        )
    }
}
