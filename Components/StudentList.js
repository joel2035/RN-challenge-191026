import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import { ListItem} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

const users = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon:'heartbeat'
    },
    {
        name: 'Jean',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Web2',
        icon: 'Select'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Web3',
        icon: 'heartbeat'
    },
]
export default class StudentList extends Component {
    render() {
        
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Web 1', value: 'Web 1' },
                            { label: 'Web 2', value: 'Web 2' },
                            { label: 'Web 3', value: 'Web 3' },
                        ]}
                    />
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
            </ScrollView>
        )
    }
}
