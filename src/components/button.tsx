import React from "react"

import {Text} from "react-native"

const Button = (props: any) => {
    return (
        <Text style={[{
            color: "#000000",
            backgroundColor: "#0099FF",
            textAlign: 'center',
            padding: 10
        }, props.style]} onPress={props.onPress} >{props.title}</Text>)
}

export default Button;