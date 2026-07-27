import React from "react";
import { useState, useEffect } from "react";


const AddProduct = () => {

    const [formData, setformData] = useState({
        title:"",
        description:"",
        category:"",
        brand:"",
        price:"",
        image:""

    })

    const onHandlechange = (e) =>{
        setformData({
            ...formData,
            [e.target.title] : e.target.value
        })

    }

    const onHandleSubmit = async (e) =>{

        e.preventDefault()

        await fetch("http://localhost:5000/products" ,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
    }

    return (
        <>
            <div>
                <form className="w-2xl mx-auto mt-5 border-2 p-5 rounded-5 bg-yellow-200" onSubmit={onHandleSubmit}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="block py-2.5 px-0 w-full font-bold text-md rtext-heading bg-transparent  border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            required=""
                            value={formData.title}
                            onChange={onHandlechange}
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute text-sm font-bold text-body font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                            Product Title
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="description"
                            id="description"
                            className="block py-2.5 px-0 w-full text-sm font-bold text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            required=""
                            onChange={onHandlechange}
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute text-sm font-bold text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                            Product Description
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="price"
                            id="price"
                            className="block py-2.5 px-0 w-full text-sm font-bold text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            required=""
                            onChange={onHandlechange}
                        />
                        <label
                            htmlFor="floating_password"
                            className="absolute text-sm font-bold text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                            Product Price
                        </label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">

                        <div className="relative z-0 mb-5 group">

                            <form className="max-w-sm mx-auto">
                                <label for="countries" className="block mb-2.5 text-sm font-bold text-heading">Select an Category</label>
                                <select id="countries" className="block w-full px-3 py-2.5 font-medium bg-neutral-secondary-medium border-none border-black rounded-2 text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" onChange={onHandlechange}>
                                    <option selected>Choose a Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Grocery">Groceary</option>
                                    <option value="Gaming">Gaming</option>
                                    <option value="Shoes">Shoes</option>
                                </select>
                            </form>

                        </div>

                        <div className="relative z-0 mb-5 group">

                            <form className="max-w-sm mx-auto">
                                <label for="countries" className="block mb-2.5 text-sm font-bold text-heading">Select an Brand</label>
                                <select id="countries" className="block w-full px-3 py-2.5 font-medium bg-neutral-secondary-medium border-none border-black rounded-2 text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" onChange={onHandlechange}>
                                    <option selected>Choose a Brand</option>
                                    <option value="Adidas">Adidas</option>
                                    <option value="Xbox">Xbox</option>
                                    <option value="Tata">Tata</option>
                                    <option value="LG">LG</option>
                                </select>
                            </form>

                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <label
                            htmlFor="floating_password"
                            className="absolute text-sm font-bold text-body duration-300 transform -translate-y-8"
                        >
                            Product Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="block py-1 px-0 w-full text-sm font-bold text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            required=""
                            onChange={onHandlechange}
                        />
                    </div>

                   
                    <button
                        type="submit" 
                        className="bg-brand box-border border border-black w-full rounded-5 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm font-bold px-4 py-2.5 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </>

    )
}

export default AddProduct;
