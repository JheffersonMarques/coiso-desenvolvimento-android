import React from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';

import Button from '../../components/button' 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4369B0',
        flex:1,

        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logoDiv:{
        flexDirection: "row",
        
    },
    logoText: {
        paddingLeft:20,
        color: "white",
        fontSize: 34,
    },
    input:{
        width:280,
        height:40,
        padding:10,
        backgroundColor:'white'
    },
    button:{
        backgroundColor: '#213873',
        color:"white",
        width:281,
    },
    signUp:{
        color:"#FFFFFF",
        textDecorationLine:"underline"
    }
});

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoDiv}>
                <Image source={require("../../assets/facebook.png")} />
                <Text style={styles.logoText}>Facebook</Text>
            </View>
            <View style={{paddingTop:60}}> 
                <TextInput style={styles.input} placeholder="E-mail"/>
            </View>
            <View style={{paddingTop:20}}>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Password"/>
            </View>
            <View style={{paddingTop:20}}>
                <Button style={styles.button} title="Log in"></Button>
            </View>
            <View style={{paddingTop:200}}>
                <Text style={styles.signUp}>
                    Sign up for Facebook
                </Text>
            </View>
        </View>
    );
}

export default Login;