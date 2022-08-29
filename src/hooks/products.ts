import {useEffect, useState} from "react";
import {IProduct} from "../../models";
import axios from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)

    async function fetchProducts() {
        setLoading(true)
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
    }

    useEffect(() => {
        console.log('effect')
        fetchProducts()
    }, [])

    return {products, loading}
}