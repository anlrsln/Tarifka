import React from "react"
import { SafeAreaView,View,Text,Image,TouchableHighlight, StyleSheet,Linking} from "react-native"
import styles from "./DetailCard.style"

const DetailCard=({detail})=>{
    console.log(detail)
    return(
        <SafeAreaView style={styles.container}>
                <Image style={styles.img} source={{uri:detail.strMealThumb}}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>{detail.strMeal}</Text>
                <Text style={styles.area}>{detail.strArea}</Text>
                <View style={styles.seperator}></View>
                <Text style={styles.description}>{detail.strInstructions}</Text>
            </View>
            <TouchableHighlight style={styles.btn} onPress={()=>Linking.openURL(`${detail.strYoutube}`)}>
                <Text style={styles.btn_title}>Watch On YouTube</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
}

export default DetailCard;