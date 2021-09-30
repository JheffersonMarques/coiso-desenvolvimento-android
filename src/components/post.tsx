import { StyleSheet, View, Image, Text } from 'react-native';
import React, { useState } from 'react';

import { OnlyIconButton, IconButton } from "../components/iconButton"
import Button from "../components/button"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
        flex: 1
    },
    user: {
        backgroundColor: "#4369B0",
        marginTop: 10,
        marginLeft: 10,
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    username: {
        marginTop: -40,
        marginLeft: 80,
        fontWeight: "bold"
    },
    postTime: {
        marginLeft: 80,
    },
    available: {
        marginTop: -17.5,
        marginLeft: 100
    },
    textContent: {
        marginTop: 20,
        margin: 20,
        maxWidth: 340
    },
    imageContent: {
        marginTop: -10,
        width: 360,
        height: 275,
        resizeMode: "stretch",

    },
    likeInfo: {
        paddingLeft: 20,
        flexDirection: 'row'
    },
    likeText: {
        paddingLeft: 5,
        textAlignVertical: 'center'
    }

})
const postUtilsStyle = StyleSheet.create({
    view: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    button: {
        color: "black",
        backgroundColor: "#FFFFFF",
        width: 120,
    }
})

const buttons = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    learnMore: {
        flex: 6,
        backgroundColor: "#3D7BE2",
        marginHorizontal: 2,
    },
    msg: {
        backgroundColor: "#3D7BE2",
        flex: 2,
        marginHorizontal: 2,
    },
    threeDots: {
        flex: 2,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#3D7BE2",
        marginHorizontal: 2,
    }
})


export function Post(props: any) {
    const [likes, setLikes] = useState(props.likes);
    return (<View style={styles.container}>
        <View style={styles.user}></View>
        <Text style={styles.username}>{props.name}</Text>
        <Text style={styles.postTime}>2h</Text>
        <Image style={styles.available} source={require("../assets/ion_earth.png")}></Image>
        <View style={styles.textContent}>{props.text}</View>
        <Image style={styles.imageContent} source={props.image} ></Image>
        <View style={styles.likeInfo}>
            <Image source={require("../assets/like-bg-blue.png")}></Image>
            <Text style={styles.likeText}>{ likes }</Text>
        </View>
        <View style={postUtilsStyle.view}>
            <IconButton src={require("../assets/link-icon.png")} style={postUtilsStyle.button} title="Like" onPress={() => { setLikes(likes +1)}}></IconButton>
            <IconButton src={require("../assets/fa-regular_comment-alt.png")} style={postUtilsStyle.button} title="Comment" onPress={() => { console.log("comment") }}></IconButton>
            <IconButton src={require("../assets/buttonShare.png")} style={postUtilsStyle.button} title="Share" onPress={() => { console.log("share") }}></IconButton>
        </View>
        <View style={buttons.container}>
            <Button style={buttons.learnMore} styleText={{ color: "white" }} title="Learn More"></Button>
            <OnlyIconButton style={buttons.msg} src={require("../assets/bi_messenger.png")}></OnlyIconButton>
            <OnlyIconButton style={buttons.threeDots} src={require("../assets/3pontos.png")}></OnlyIconButton>
        </View>
    </View>)
}