import React from "react"
import { SafeAreaView,View,Text,Image,TouchableWithoutFeedback,ImageBackground} from "react-native"
import styles from "./MealCard.style"


const MealCard=({meal,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <SafeAreaView style={styles.container}>
                    <ImageBackground source={{uri:meal.strMealThumb}} style={styles.img}>
                            <Text style={styles.title}>{meal.strMeal}</Text>
                    </ImageBackground>
            </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}

export default MealCard;