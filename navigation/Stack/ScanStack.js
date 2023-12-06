import React from "react";

// React Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import ScanScreen from "../Screen/Scan/ScanScreen";


const Stack = createStackNavigator()

const ScanStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="Scan Screen" component={ScanScreen} />
        </Stack.Navigator>
    )
}

export default ScanStack