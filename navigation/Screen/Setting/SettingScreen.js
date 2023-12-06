import React from 'react'
import { Dimensions } from 'react-native'

// Native Base
import { Box, Center, Heading, Image, Text } from 'native-base'

const height = Dimensions.get('window').height

const SettingScreen = () => {

    return (
        <Box variant={'container'} p={0} >
            <Box height={height/2} backgroundColor={'secondary.600'} borderBottomRadius={40} justifyContent={'center'} >
                <Center>
                    <Image
                        height={50}
                        width={50}
                        borderRadius={25}
                    />
                    <Heading color={'primary.600'} >Muhammad Auon</Heading>
                </Center>
            </Box>
        </Box>
    )
}

export default SettingScreen