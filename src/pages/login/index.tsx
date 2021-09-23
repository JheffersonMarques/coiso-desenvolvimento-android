import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';

import Button from '../../components/button' 
import { StackNavigationTypes } from '../../types';

import styles from "./styles"

const Login = () => {

    type HomeProps = NativeStackNavigationProp<StackNavigationTypes,"Login">
    const nav = useNavigation<HomeProps>()
    
    function goHome(){
        nav.navigate("Home");
    }
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
                <Button style={styles.button} styleText={{color:"white"}}title="Log in" onPress={()=>{goHome()}}></Button>
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