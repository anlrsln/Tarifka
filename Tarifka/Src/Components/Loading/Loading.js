import React from "react"
import LottieView from 'lottie-react-native'


const Loading=()=>{
    return(
        <LottieView source={require("../../Assets/lottie/9619-loading-dots-in-yellow.json")} autoPlay/>
    )
}

export default Loading;