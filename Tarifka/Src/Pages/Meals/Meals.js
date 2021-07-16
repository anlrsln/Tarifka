import React from "react"
import {SafeAreaView,Text,View,FlatList,StyleSheet} from "react-native"
import Config from "react-native-config"
import useFetch from "../../Hooks/useFetch"
import MealCard from "../../Components/MealCard"
import Loading from "../../Components/Loading"
import Error from "../../Components/Error"

const Meals=({navigation,route})=>{
    const {loading,error,data}=useFetch(`${Config.API_MEALS}${route.params}`)
    

    function onSelect(id){
        navigation.navigate("DetailScreen",(id))
    }

    function renderMeals({item}){
        return <MealCard meal={item} onSelect={()=>{onSelect(item.idMeal)}}/>
    }

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }



    return (
        <SafeAreaView style={{backgroundColor:"#f9a825"}}>
            <FlatList data={data.meals} renderItem={renderMeals} keyExtractor={item => item.idMeal.toString()}/>
        </SafeAreaView>
    )
}

export default Meals;