import {useEffect, useState} from 'react'
import { useQueryClient } from 'react-query'
import {baseUrl} from '../../../config/index';

export default function useListProduct () {
    const [products, setProducts] = useState([])
    const [productsCopy, setProductsCopy] = useState([])
    const [loading, setLoading] = useState(false)
    const queryKey = 'products'
    const queryClient = useQueryClient()

    const fetchProducts = () => fetch(`${baseUrl}/product`).then(res => res.json())
    const getProducts = async () => {
        setLoading(true)
        try {
            const data = await queryClient.fetchQuery(queryKey, fetchProducts)
            setProductsCopy(data)
            setProducts(data)
            setLoading(false)
        } catch (error) {
            console.log('error ->', error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    return {
        products,
        loading,
        setProducts,
        productsCopy
    }
}