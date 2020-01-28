import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import bgImage from './images/background.png'
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

export default function App() {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View>
                <Text style={styles.textContainer}>Connexion</Text>
            </View>
            <View style={styles.inputContainer}>
                <Icon name={'ios-person-outline'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder={'username'}
                    placeholderTextcolor={'rgba(255,255,255,0.7'}
                    underlineColorAndroid='transparent'
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name={'ios-lock-outline'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder={'password'}
                    secureTextEntry={true}
                    placeholderTextcolor={'rgba(255,255,255,0.7'}
                    underlineColorAndroid='transparent'
                />
            </View>
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.text}>Login</Text> 
            </TouchableOpacity>
            <View>
                <Text style = {styles.sing}>Signup </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        marginBottom: 30,

    },
    textContainer: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        opacity: 0.5
    },
    inputContainer: {
        margin: 10
    },
    input: {
        height: 45,
        width: WIDTH - 55,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)'
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 30,
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 38,
    },
    btnLogin: {
        height: 45,
        width: WIDTH - 55,
        borderRadius: 45,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'rgba(255,255,255,0.7)'
    },
    sing:{
        color:'red',
        fontSize:16,  
    }
});
