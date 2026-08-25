import React from "react";
import Productcard from "../Component/Productcard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../Hooks/Costumhook";
import { fetchProducts } from "../Features/users/ProductSlice";
import { useDispatch, useSelector } from "react-redux"


const Product = () => {

    const dispatch = useDispatch()

    const product = useSelector((state) => state.data);


    console.log("Products:", product);


    const { isAdmin } = false;


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    if (status === "loading") return <p>loading............</p>

    if (status === "failed") {
        return <p>Failed to load products.</p>;
    }

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
