import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Categories from "./Pages/Categories";
import Meals from "./Pages/Meals";
import Detail from "./Pages/Detail";

const Stack=createStackNavigator();


const Router=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={Categories} options={{
          headerTitle:"Categories",
          headerTitleAlign:"center",
          headerTitleStyle:{color:"#f9a825"}
        }}/>
        <Stack.Screen name="MealsScreen" component={Meals} options={{
          headerTitle:"Meals",
          headerTitleAlign:"center",
          headerTitleStyle:{color:"#f9a825"}
        }}/>
        <Stack.Screen name="DetailScreen" component={Detail} options={{
          headerTitle:"Detail",
          headerTitleAlign:"center",
          headerTitleStyle:{color:"#f9a825"}
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Router;