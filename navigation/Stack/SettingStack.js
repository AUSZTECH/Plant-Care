import React from 'react'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import SettingScreen from '../Screen/Setting/SettingScreen'
import ProfileScreen from '../Screen/Setting/ProfileScreen'

const Stack = createStackNavigator()

const SettingStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={'Setting Screen'} component={SettingScreen} />
        </Stack.Navigator>
    )
}

export default SettingStack