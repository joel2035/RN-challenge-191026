import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, ScrollView, Picker} from 'react-native';
import { Input } from 'react-native-elements';
import Textarea from 'react-native-textarea';
export default class Post extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.textContainer}>Ajouter un Etudiant</Text>
                    <Input
                        placeholder='FirstName'
                    />
                    <Input
                        placeholder='Name'
                    />
                    <Input
                        placeholder='Email'
                    />
                    <Input
                        placeholder='Promotion'
                    />
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        maxLength={120}
                        placeholder={'Description'}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                </ScrollView>

            </View>            
        )
    }
}

const styles = StyleSheet.create({
 container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     top:4,
     backgroundColor:'yellow' 
 },
 scroll:{
     marginTop:70
 },
 textContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     fontSize:30,
     color:'black',
    marginTop:20
 },
    textareaContainer: {
        height: 110,
        width:330,
        marginTop:20,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
    textarea: {
        textAlignVertical: 'top',  
        height: 170,
        fontSize: 14,
        color: '#333',
    },
})

