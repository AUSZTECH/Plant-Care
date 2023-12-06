import { useState } from 'react'

// Axios
import axios from 'axios'

// API Endpoint
import baseURL from '../assets/common/baseURL'

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
    }
})

const useAxios = () => {

    const [loading, setLoading] = useState(false)

    const axiosFetch = async (configObj, onSuccess, onError) => {
        const {
            method,
            url,
            requestConfig,
        } = configObj

        try {
            setLoading(true)
            const res = await axiosInstance[method.toLowerCase()](url, requestConfig)
            if (res.status === 200) {
                onSuccess(res.data)
            }
        } catch (err) {
            onError(err)
        } finally {
            setLoading(false)
        }
    }

    return [loading, axiosFetch]
}

export default useAxios