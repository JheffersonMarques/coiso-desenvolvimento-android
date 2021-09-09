import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native';

import { Header } from '../../components/header';
import { Post } from '../../components/post';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9c9c9'
    }
});


const Home = () =>{
    return (
        <ScrollView style={styles.container}>
            <Header/>
            <Post
                name="Unblast"
                text={<Text>Pain and Suffering Awaits</Text>}
                image={require("../../assets/image.png")}
            />
        </ScrollView>
    );
}

export default Home;