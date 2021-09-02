import { StyleSheet, View, Image, TextInput } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    header:{
        minHeight:93,
        backgroundColor: "#4369B0",
        paddingTop:40,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
    },
    inputTextView:{
        flex:1,
        backgroundColor:"#2C4877",
        height:40,
        marginHorizontal:10,
        alignItems: "center",
        borderRadius:28,
        flexDirection:"row"
    },
    textInput:{
        color:"#F5FFFF",
        flex:1,
        paddingRight:10,
    },
})
export function Header(){
    return (<View style={styles.header}>
        <Image source={
            require("../assets/arrow-left.png")
            }>
        </Image>
        <View style={styles.inputTextView}>
            <Image source={
                require("../assets/ei_search.png")
                }>
            </Image>
            <TextInput
                placeholder="Search"
                placeholderTextColor="#F5FFFF"
                style={styles.textInput}
                >

            </TextInput>
        </View>
        <Image source={
            require("../assets/share.png")
            }>
        </Image>

    </View>)
}
