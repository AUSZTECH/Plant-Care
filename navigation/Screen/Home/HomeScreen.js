import React, { useState } from 'react'
import { SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'

// React Navigation
import { useNavigation } from '@react-navigation/native'

// Native Base
import {
    Box,
    Card,
    Heading,
    Input,
    Stack,
    Text,
    Image,
    FlatList,
    HStack,
    IconButton,
    Icon,
    Modal,
    Fab
} from 'native-base'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

// Data
import CropsData from '../../../data/Crops'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const HomeScreen = () => {

    const navigation = useNavigation()

    const [open, setOpen] = useState(false)

    return (
        <Box variant={'container'} >
            <Stack space={4} >
                {/* <Input placeholder='Search' variant={'outline'} /> */}
                <Heading variant={'dark'} >Crops</Heading>



                <FlatList
                    data={CropsData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Crop Screen', { data: item })} >
                            <Card alignItems={'center'} justifyContent={'center'} height={120} width={width / 2.5} m={2} borderRadius={15} backgroundColor={'secondary.500'} >
                                <Image
                                    size={'sm'}
                                    source={item.image}
                                    alt={item.name}
                                    resizeMode={'contain'}
                                />
                                <Text fontWeight={'bold'} color={'gray.900'} >{item.name}</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                    horizontal={false}
                    numColumns={2}
                />
                {/* <Heading>Current Task</Heading>
                    {Tasks.map((item, index) => (
                        <Card key={index} >
                            <HStack space={4} width={'80%'} alignItems={'center'} >
                                <Badge rounded={'md'} height={60} width={60} colorScheme={item.status} variant={'solid'} >{item.time}</Badge>
                                <Stack space={2} >
                                    <Heading size={'sm'} >{item.heading}</Heading>
                                    <Text>{item.task}</Text>
                                </Stack>
                            </HStack>
                        </Card>
                    ))} */}
            </Stack>

            <Fab
                icon={<Icon as={Ionicons} name={'ios-bulb'} size={'xl'} />}
                onPress={() => setOpen(true)}
                colorScheme={'info'}
                renderInPortal={false}
            />

            <Modal isOpen={open} onClose={() => setOpen(false)} >
                <Modal.Content height={height} width={width - 20} >
                    <Modal.Header>
                        <Heading variant={'dark'} >About</Heading>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <Modal.Body>
                        <Stack space={4} >
                            <HStack justifyContent={'space-between'} >
                                <Heading variant={'dark'} bold size={'md'}>Developed By</Heading>
                                <Heading variant={'dark'} size={'md'} >Airborne AI</Heading>
                            </HStack>
                            <HStack justifyContent={'space-between'} >
                                <Heading variant={'dark'} size={'sm'} bold >Founder</Heading>
                                <Heading variant={'dark'} size={'sm'} >Muhammad Auon</Heading>
                            </HStack>
                            <HStack justifyContent={'space-between'} >
                                <Heading variant={'dark'} size={'sm'} bold >Team Members</Heading>
                                <Stack space={2} >
                                    <Heading variant={'dark'} size={'sm'} >Hadia Manzoor</Heading>
                                    <Heading variant={'dark'} size={'sm'} >Khadija Fazal</Heading>
                                </Stack>
                            </HStack>
                            <HStack justifyContent={'space-between'} >
                                <Text variant={'dark'} bold >Version</Text>
                                <Text variant={'dark'} >1.0</Text>
                            </HStack>
                        </Stack>
                    </Modal.Body>
                    <Modal.Footer justifyContent={'center'} >
                        <Heading size={'sm'} variant={'dark'} >Powered by Lahore Garrison University</Heading>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box>
    )
}

export default HomeScreen