import React, { useEffect, useState } from "react";
import ProductListItem from "./products/ProductListItem";
import axios from 'axios'

export default function Home(){

    const[products, setProducts] = useState([])

    useEffect(() => {

        const fetchproducts = async () => {
            try {
                const response = await axios.get('http://localhost:4001/products')
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
            
        }
        fetchproducts()
    }, [])
    return (
        <div className="container">
            <div className="row my-5">
                {
                    products?.map(product => <ProductListItem key={product.id} product={product}/>)
                }
                
            </div>
        </div>
    )
}