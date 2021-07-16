import React from "react"
import {SafeAreaView,Text,View,FlatList} from "react-native"
import styles from "./Categories.style"
import Config from "react-native-config"
import useFetch from "../../Hooks/useFetch"
import CategoriesCard from "../../Components/CategoriesCard"
import Loading from "../../Components/Loading"
import Error from "../../Components/Error"

const Categories=({navigation})=>{
    const {loading,error,data}=useFetch(Config.API_CATEGORIES)

    function pressCategory(category){
        navigation.navigate("MealsScreen",(category))
    }   

    function renderCategories({item}){
        return <CategoriesCard category={item} onSelect={()=>{pressCategory(item.strCategory)}}/>
    }

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.categories} renderItem={renderCategories} keyExtractor={(item, index) => index.toString()}/>
        </SafeAreaView>
    )
}

export default Categories;