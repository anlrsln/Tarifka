import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        margin:10,
        backgroundColor:"white",
        borderRadius:20
    },
    img:{
        flex:1,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        height:250,
        resizeMode:"cover"
    },
    body_container:{
        flex:3,
        padding:10,
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"#b71c1c"
    },
    area:{
        marginTop:5,
        fontSize:25,
        color:"#b71c1c",
        fontWeight:"bold",
    },
    seperator:{
        borderWidth:1,
        borderColor:"#e0e0e0",
        margin:10
    },
    description:{
        fontSize:17,
        lineHeight:27
    },
    btn:{
        borderRadius:8,
        padding:10,
        alignItems:"center",
        backgroundColor:"#d50000"
    },
    btn_title:{
        color:"white",
        fontSize:18,
        fontWeight:"bold"
    }
})