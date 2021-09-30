import React from 'react'
import { TouchableOpacity, Text, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Header } from '../../components/header';
import { Post } from '../../components/post';
import Button from '../../components/button'
import { stylesLink,styles,stylesLinkImportantes } from "./styles"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackNavigationTypes } from '../../types'



const LinkItem = (props:any)=>{
    return(
        <Text style={stylesLink.text}>{props.name}</Text>
    );
}
const LinksImportantes = ()=>{
    return(//Aqui dentro ficarÃ¡ o nosso JSX
        <View style={stylesLinkImportantes.container}>
            <LinkItem name="Home"/>
            <LinkItem name="Post"/>
            <LinkItem name="Videos"/>
            <LinkItem name="Photos"/>
            <LinkItem name="Community"/>
        </View>
    );
};

const Home = () => {
    type HomeProps = NativeStackNavigationProp<StackNavigationTypes,"Home">
    const nav = useNavigation<HomeProps>()
    
    function goLogin(){
       nav.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <Header />
            <LinksImportantes/>
            <ScrollView>
            <Post 
                    name="Unblast"
                    text={<Text>Este é o design que vamos replicar hoje na aula: <Text style={{color:"#4D6196", textDecorationLine:'underline'}}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text></Text>}
                    image={require("../../assets/image.png")}
                    likes={12}
                />
                <Post
                    name="Unblast"
                    text={<Text>Este é o design que vamos replicar hoje na aula: <Text style={{color:"#4D6196", textDecorationLine:'underline'}}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text></Text>}
                    image={require("../../assets/image.png")}
                    likes={12}
                />
                <Post
                    name="Unblast"
                    text={<Text>Este é o design que vamos replicar hoje na aula: <Text style={{color:"#4D6196", textDecorationLine:'underline'}}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text></Text>}
                    image={require("../../assets/image.png")}
                    likes={12}
                />
                <Post
                    name="Unblast"
                    text={<Text>Este é o design que vamos replicar hoje na aula: <Text style={{color:"#4D6196", textDecorationLine:'underline'}}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text></Text>}
                    image={require("../../assets/image.png")}
                    likes={12}
                />
                <Button title="Go to Login" onPress={() => goLogin()}></Button>
        </ScrollView>
        </View>
    );
}

export default Home;