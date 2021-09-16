import React from 'react'
import { TouchableOpacity, Text, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Header } from '../../components/header';
import { Post } from '../../components/post';
import Button from '../../components/button'
import styles from "./styles"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackNavigationTypes } from '../../types'



const Home = () => {
    type HomeProps = NativeStackNavigationProp<StackNavigationTypes,"Home">
    const nav = useNavigation<HomeProps>()
    
    function goLogin(){
       nav.navigate("Login");
    }

    return (
        <ScrollView style={styles.container}>
            <Header />
            <Post
                    name="Unblast"
                    text={<Text>Pain and Suffering Awaits</Text>}
                    image={require("../../assets/image.png")}
                />

            <Button style={styles.button}title="Go to next page" onPress={()=>{goLogin()}}>

            </Button>

        </ScrollView>
    );
}

export default Home;