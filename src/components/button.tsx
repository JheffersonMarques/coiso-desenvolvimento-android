import React from "react"

import {Text,StyleSheet,TouchableOpacity} from "react-native"

const styles = StyleSheet.create({
    meubotao:{
        backgroundColor:"#4369B0",
        height:40,
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:40,
        borderRadius:10,

    },meubotaoTexto:{
        color:"black",
    }
})
const Button = (props: any) => {
    return (
    <TouchableOpacity style={[styles.meubotao,props.style]} onPress={props.onPress}>
        <Text style={[styles.meubotaoTexto,props.styleText]}>{props.title}</Text>
    </TouchableOpacity>
    )
}

export default Button;