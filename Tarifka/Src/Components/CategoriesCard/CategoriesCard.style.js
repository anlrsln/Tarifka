import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        margin:10,
        padding:10,
        backgroundColor:"white",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },
    img_container:{
        flex:1
    },
    img:{
        height:100,
        width:100,
        resizeMode:"contain"
    },
    body_container:{
        flex:2,
        justifyContent:"center",
        
    },
    category:{
        fontSize:22,
        marginLeft:10
    }
})