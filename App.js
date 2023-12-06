import React from 'react'
import { StyleSheet, View } from 'react-native'

// React Navigation
import { NavigationContainer } from '@react-navigation/native'

// Native Base
import { NativeBaseProvider, StatusBar } from 'native-base'
import theme from './theme'

// Components
import Container from './navigation/Container'
import HomeStack from './navigation/Stack/HomeStack'


const App = () => {

  return (
    <View style={styles.container} >
      <NativeBaseProvider theme={theme} >
        <NavigationContainer>
          <HomeStack />
          <StatusBar backgroundColor={'#e3f5df'} barStyle={'dark-content'} />
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})