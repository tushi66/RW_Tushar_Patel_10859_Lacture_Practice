import React from "react";
import Productcard from "../Component/Productcard";
import { useState, useEffect } from "react";


const Product = () => {

    const [product, setproduct] = useState([])

    const ProductApi = async () => {

        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json()
        setproduct(data.products)
    }

    useEffect(() => {
        ProductApi()
    }, [])

    return (
        <>

        <div className="relative mt-20 container mx-auto">
            <div className="flex flex-wrap gap-2">
                {
                    product.map((p, index)=> {

                        return(
                            <Productcard key={index} item={p} />
                        )
                    })
                }

            </div>

        </div>

        </>

    )
}

export default Product;
