import React from "react";
import Productcard from "../Component/Productcard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {

    const navigate = useNavigate()

    const add_form = () => {
        navigate('/add_product')
    }
   

    const [product, setproduct] = useState([])

    const ProductApi = async () => {

        let res = await axios.get("http://localhost:5000/products")
        setproduct(res.data)
        console.log(res.data);

    }

    useEffect(() => {
        ProductApi()
    }, [])


    return (
        <>

            <div className="relative container mx-auto">

                <div className="flex justify-end mb-5 gap-5">
                    <button
                        onClick={add_form}
                        className="bg-blue-600 text-white px-4 py-2 mt-5 rounded hover:bg-blue-700"
                    >
                        Add Product
                    </button>

                </div>

                <div className="flex flex-wrap gap-2">
                    {
                        product.map((p, index) => {

                            return (
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
