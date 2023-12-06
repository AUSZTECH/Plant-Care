import React, { useState } from 'react'

// Native Base
import { Box, Button, Heading, Stack, Text } from 'native-base'

// Image Picker
import ImagePicker from 'react-native-image-crop-picker'

// API
import useAxios from '../../../hooks/useAxios';


const ScanScreen = () => {

    const [image, setImage] = useState()
    const [response, setResponse] = useState({})

    const [loading, axiosFunction] = useAxios()

    const uploadImage = () => {


        const formData = new FormData()
        console.log(image)
        formData.append('file', {
            uri: image.path,
            type: image.mime,
            name: 'potato'
        })

        axiosFunction({
            method: 'POST',
            url: 'predict',
            requestConfig: formData
        }, (res) => {
            setResponse(res)
        }, (err) => {
            console.log(err)
        })
    }


    return (
        <Box variant={'coloredContainer'} >
            <Stack space={4} >
                <Heading  >Check your Plant for Disease</Heading>
                <Button colorScheme={'secondary'} onPress={() => {
                    ImagePicker.openCamera({
                        width: 256,
                        height: 256,
                        cropping: true
                    })
                        .then((image) => setImage(image))
                        .catch((err) => console.log(err))
                }} >Take Picture</Button>
                {/* <Button colorScheme={'secondary'} onPress={() => {
                    ImagePicker.openPicker({
                        width: 256,
                        height: 256,
                        cropping: true
                    })
                        .then((image) => setImage(image))
                }} >Open Gallery</Button> */}
                <Button isLoading={loading} colorScheme={'secondary'} variant={'subtle'} onPress={uploadImage} >Get Result</Button>
                <Text>Result: {response?.class}</Text>
            </Stack>
        </Box>
    )
}

export default ScanScreen