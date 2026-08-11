import React from "react";
import Productcard from "../Component/Productcard";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Hooks/Costumhook";


const Product = () => {

    const { isAdmin } = useAuth();

    const navigate = useNavigate()

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

                    {isAdmin && (
                        <Link
                            to="/add_product"
                            className="block !py-2 !px-5 m-2 text-white rounded-3xl bg-blue-600 cursor-pointer"
                        >
                            Add New Product
                        </Link>
                    )}

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
