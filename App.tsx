import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './src/components/header';
import {Post} from './src/components/post';

export default function App() {
    return (
        <View style={styles.container}>
            <Header></Header>
            <Post 
                name="Unblast" 
                text={<Text>Pain and Suffering Awaits</Text>}
                image={require("./src/assets/image.png")}
            />
            
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#c9c9c9'
    }
});
