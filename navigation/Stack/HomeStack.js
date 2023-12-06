import React from 'react'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../Screen/Home/HomeScreen'
import CropScreen from '../Screen/Home/CropScreen'
import ScanScreen from '../Screen/Scan/ScanScreen'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Home Screen' component={HomeScreen} />
            <Stack.Screen name='Crop Screen' component={CropScreen} />
            <Stack.Screen name="Scan Screen" component={ScanScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack