import React, {FC} from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProductScreen from "../screens/ProductScreen";

type AppStackParamList = {
    HomeScreen: undefined
    DetailScreen: undefined
    ProductScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

const MainStackNavigation: FC = ({navigation}:any) => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: true,
            }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="DetailScreen" component={DetailScreen}/>
                <Stack.Screen name="ProductScreen" component={ProductScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigation;
