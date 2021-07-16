import {StyleSheet,Dimensions} from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10,        
    },
    img:{
        borderRadius:20,
        height:200,
        width:370,
        resizeMode:"cover",
        justifyContent:"flex-end",
        overflow: 'hidden'
    },
    title:{
        color: "white",
        fontSize: 22,
        lineHeight:50,
        textAlign:"center",
        backgroundColor: "#000000c0"
    }
})