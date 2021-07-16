import React from "react"
import {SafeAreaView,Text,View,FlatList} from "react-native"
import Config from "react-native-config";
import DetailCard from "../../Components/DetailCard/DetailCard";
import useFetch from "../../Hooks/useFetch";
import styles from "./Detail.style"
import Loading from "../../Components/Loading"
import Error from "../../Components/Error"

const Detail=({route})=>{
    const id=route.params
    const {loading,error,data}=useFetch(`${Config.API_DETAIL}${id}`)

    function renderDetail({item}){
        return <DetailCard detail={item}/>
    }

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.meals} renderItem={renderDetail} keyExtractor={(item, index) => index.toString()}/>
        </SafeAreaView>
    )
}

export default Detail;