import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4369B0',
        flex:1,

        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logoDiv:{
        flexDirection: "row",
        
    },
    logoText: {
        paddingLeft:20,
        color: "white",
        fontSize: 34,
    },
    input:{
        width:280,
        height:40,
        padding:10,
        backgroundColor:'white'
    },
    button:{
        backgroundColor: '#213873',
        color:"white",
        width:281,
    },
    signUp:{
        color:"#FFFFFF",
        textDecorationLine:"underline"
    }
});

export default styles;