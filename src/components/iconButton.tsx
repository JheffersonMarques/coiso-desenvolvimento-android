import React from "react";

import { TouchableOpacity,Text,StyleSheet,Image} from "react-native";

const styles = StyleSheet.create({
    meubotao:{
        flexDirection:"row",
        backgroundColor:"#4369B0",
        height:40,
        width:80,
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:20,
        borderRadius:10,

    },meubotaoTexto:{
        paddingLeft:10,
        color:"black",
    }
})
const IconButton = (props: any) => {
    return (
    <TouchableOpacity style={[styles.meubotao,props.style]} onPress={props.onPress}>
        <Image source={props.src}></Image>
        <Text style={styles.meubotaoTexto}>{props.title}</Text>
    </TouchableOpacity>
    )
}

export default IconButton;