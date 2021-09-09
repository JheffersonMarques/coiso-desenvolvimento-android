import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Header } from './src/components/header';
import { Post } from './src/components/post';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <Header/>
            <Post
                name="Unblast"
                text={<Text>Pain and Suffering Awaits</Text>}
                image={require("./src/assets/image.png")}
            />
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9c9c9'
    }
});
