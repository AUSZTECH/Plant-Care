import React from 'react'
import { SafeAreaView } from 'react-native'

// React Navigation
import { useNavigation } from '@react-navigation/native'

// Native Base
import {
    Box,
    Card,
    Divider,
    Heading,
    HStack,
    Icon,
    IconButton,
    ScrollView,
    Stack,
    Text
} from 'native-base'

import AntDesign from 'react-native-vector-icons/AntDesign'



const CropScreen = ({ route }) => {

    const navigation = useNavigation()

    const { data } = route.params

    return (
        <ScrollView>
            <Box variant={'coloredContainer'} >
                <Stack space={4} >
                    <HStack justifyContent={'space-between'} alignItems={'center'} >
                        <IconButton size={'lg'} icon={<Icon as={AntDesign} name={'left'} color={'#fff'} />} onPress={() => navigation.goBack()} />
                        <Heading>{data.name}</Heading>
                        <IconButton size={'lg'} icon={<Icon as={AntDesign} name={'camera'} color={'#fff'} />} onPress={() => navigation.navigate('Scan Screen')} />
                    </HStack>
                    <Heading size={'md'} >Timeline</Heading>
                    {data.timeline.map((item, index) => (
                        <Box key={index} >
                            <Stack space={2} >
                                <Text>{item.start_date}</Text>
                                <HStack space={10} width={'90%'} >
                                    <Divider orientation='vertical' />
                                    <Card>
                                        <Text fontWeight={'bold'} fontSize={18} variant={'dark'} >{item.action}</Text>
                                        <Text variant={'dark'} >{item.detail}</Text>
                                    </Card>
                                </HStack>
                                <Text>{item.end_date}</Text>
                            </Stack>

                        </Box>
                    ))}
                    {data?.data.map((item, index) => (
                        <Card key={index} >
                            <Stack space={2} >
                                <Heading variant={'dark'} >{item.heading}</Heading>
                                {item.details.map((text, index) => (
                                    <Text key={index} variant={'dark'} >{text}</Text>
                                ))}
                            </Stack>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </ScrollView>
    )
}

export default CropScreen