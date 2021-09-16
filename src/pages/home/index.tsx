import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native';

import { Header } from '../../components/header';
import { Post } from '../../components/post';

import styles from "./styles"

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