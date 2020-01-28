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
    
    // static navigationOptions = {
    //     title: 'Welcome',
    // };
    render() {
        // const { navigate } = this.props.navigation;
        return (
            
            <View>
                {
                    users.map((l, i) => (
                        <ListItem
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
            // <Button
            //     title="Go to Jane's profile"
            //     onPress={() => navigate('Edit', { name: 'Jane' })}
            // />
        )
    }
}
