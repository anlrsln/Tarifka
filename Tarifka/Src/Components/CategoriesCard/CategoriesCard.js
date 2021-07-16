import React from "react"
import { SafeAreaView,Text,View,Image,TouchableWithoutFeedback} from "react-native"
import styles from "./CategoriesCard.style"


const CategoriesCard=({category,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <SafeAreaView style={styles.container}>
                <View style={styles.img_container}><Image style={styles.img} source={{uri:category.strCategoryThumb}}/></View>
                <View style={styles.body_container}>
                    <Text style={styles.category}>{category.strCategory}</Text>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}



export default CategoriesCard;