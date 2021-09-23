
import { StyleSheet } from 'react-native';



export const stylesLink = StyleSheet.create({
    text:{
        //backgroundColor:"red",
        marginTop:10,
        color: '#4A4A4C',
        fontSize: 13.71,

    }
});

export const stylesLinkImportantes = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal:40,
        paddingVertical:10,
        backgroundColor:"white",
        borderBottomColor:"#F0F0F0",
        borderBottomWidth:1,

    }
});

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9c9c9'
    },
    button:{
        backgroundColor:'#4369B0',
        height:40,
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:40,
        borderRadius:10,
    },
    facebookContent:{
       flex:1,
       justifyContent:'flex-end',
       paddingTop:10
    }
});
