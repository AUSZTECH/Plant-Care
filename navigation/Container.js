import React from 'react'

// React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

// Stacks
import HomeStack from './Stack/HomeStack'
import ScanStack from './Stack/ScanStack'
import SettingStack from './Stack/SettingStack'


const Tabs = createBottomTabNavigator()

const Container = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#4c4aa4',
                tabBarShowLabel: false,
                tabBarStyle: {

                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Home') {
                        iconName = focused ? 'md-home' : 'md-home-outline'
                    } else if (rn === 'Scan') {
                        iconName = focused ? 'md-camera' : 'md-camera-outline'
                    } else if (rn === 'Setting') {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} color={color} size={size} />
                }
            })}
        >
            <Tabs.Screen name={'Home'} component={HomeStack} />
            <Tabs.Screen name={'Scan'} component={ScanStack} />
            <Tabs.Screen name={'Setting'} component={SettingStack} />
        </Tabs.Navigator>
    )
}

export default Container