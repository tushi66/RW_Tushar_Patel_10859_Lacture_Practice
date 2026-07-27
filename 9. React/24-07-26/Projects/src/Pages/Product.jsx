import React from "react";
import Productcard from "../Component/Productcard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {

    const navigate = useNavigate()

    const add_form = () => {
        navigate('/add_product')
    }

    const [product, setproduct] = useState([])

    const ProductApi = async () => {

        let res = await fetch("http://localhost:5000/products")
        let data = await res.json()
        setproduct(data)
        console.log(data);

    }

    useEffect(() => {
        ProductApi()
    }, [])


    return (
        <>

            <div className="relative container mx-auto">

                <div className="flex justify-end mb-5">
                    <button
                        onClick={add_form}
                        className="bg-blue-600 text-white px-4 py-2 mt-5 rounded hover:bg-blue-700"
                    >
                        Add Product
                    </button>
                </div>

                <div className="flex flex-wrap gap-2">
                    {
                        product.map((p) => {

                            return (
                                <Productcard key={p.id} item={p} />
                            )
                        })
                    }

                </div>

            </div>

        </>

    )
}

export default Product;
