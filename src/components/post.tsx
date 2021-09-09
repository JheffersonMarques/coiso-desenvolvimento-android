import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
        height: 540,
    },
    user: {
        backgroundColor: "#4369B0",
        top: 10,
        left: 10,
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    username: {
        top: -40,
        left: 80,
        fontWeight: "bold"
    },
    postTime: {
        top: -35,
        left: 80,
    },
    available: {
        top: -53,
        left: 100
    },
    textContent: {
        top: -40,
        margin: 20,
        maxWidth: 340
    },
    imageContent: {
        top: -30,
        width: 350,
        height: 300,
        resizeMode: "stretch",

    }

})
const postUtilsStyle = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    button: {
        backgroundColor: "#FFFFFF",
        width: 100,
    }
})

function PostUtils(props: any) {
    return (<View style={postUtilsStyle.view}>
        <IconButton src={require("../assets/link-icon.png")} style={postUtilsStyle.button} title="Like" onPress={() => { console.log("like") }}></IconButton>
        <IconButton src={require("../assets/fa-regular_comment-alt.png")} style={postUtilsStyle.button} title="Comment" onPress={() => { console.log("comment") }}></IconButton>
        <IconButton src={require("../assets/buttonShare.png")} style={postUtilsStyle.button} title="Share" onPress={() => { console.log("share") }}></IconButton>
    </View>)
}
function Button(props: any) {
    return (
        <Text style={[{
            color: "#000000",
            backgroundColor: "#0099FF",
            textAlign: 'center',
            padding: 10
        }, props.style]} onPress={props.onPress} >{props.title}</Text>)
}
function IconButton(props: any) {
    return (
        
        <Text style={[{
            color: "#000000",
            backgroundColor: "#0099FF",
            textAlign: 'center',
            padding: 10,
            margin:10
        }, props.style]} onPress={props.onPress}>
            <Image source={props.src}/>
            {props.title}</Text>)
}

export function Post(props: any) {
    return (<View style={styles.container}>
        <View style={styles.user}></View>
        <Text style={styles.username}>{props.name}</Text>
        <Text style={styles.postTime}>2h</Text>
        <Image style={styles.available} source={require("../assets/ion_earth.png")}></Image>
        <View style={styles.textContent}>{props.text}</View>
        <Image style={styles.imageContent} source={props.image} ></Image>
        <PostUtils></PostUtils>
    </View>)
}