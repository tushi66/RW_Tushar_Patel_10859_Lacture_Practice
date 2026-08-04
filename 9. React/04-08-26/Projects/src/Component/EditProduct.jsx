import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [ imagePreview, SetImagePreview] =useState("")


    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        image: "",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`http://localhost:5000/products/${id}`);
            const data = await res.json();
            setFormData(data);
        };

        fetchProduct();
    }, [id]);

    const onHandlechange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    }

    const OnHandleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            setFormData((prev) => ({
                ...prev,
                image: reader.result,
            }));

            SetImagePreview(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const onHandleSubmit = async (e) => {

        e.preventDefault()

        await fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
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
                            className="block py-2.5 px-0 w-full font-bold text-md rtext-heading bg-transparent  border-bottom-1 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            required=""
                            value={formData.title}
                            onChange={onHandlechange}
                        />
                        <label
                            htmlFor="title"
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
                            className="block py-2.5 px-0 w-full text-sm font-bold text-heading bg-transparent border-bottom-1 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            required=""
                            value={formData.description}
                            onChange={onHandlechange}
                        />
                        <label
                            htmlFor="description"
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
                            className="block py-2.5 px-0 w-full text-sm font-bold text-heading bg-transparent border-bottom-1 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            required=""
                            value={formData.price}
                            onChange={onHandlechange}
                        />
                        <label
                            htmlFor="price"
                            className="absolute text-sm font-bold text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                            Product Price
                        </label>
                    </div>

                    <div className="grid grid-cols-2 gap-2">

                        <div className="relative z-0 mb-5 group">

                            <div className="max-w-sm mx-auto">
                                <label for="category" className="block mb-2.5 text-sm font-bold text-heading">Select an Category</label>
                                <select name="category" id="category" className="block w-full px-3 py-2.5 font-medium bg-neutral-secondary-medium border-1 border-black rounded-2 text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" value={formData.category} onChange={onHandlechange}>
                                    <option>Choose a Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Grocery">Groceary</option>
                                    <option value="Gaming">Gaming</option>
                                    <option value="Shoes">Shoes</option>
                                </select>
                            </div >

                        </div>

                        <div className="relative z-0 mb-5 group">

                            <div className="max-w-sm mx-auto">
                                <label for="brand" className="block mb-2.5 text-sm font-bold text-heading">Select an Brand</label>
                                <select name="brand" id="brand" className="block w-full px-3 py-2.5 font-medium bg-neutral-secondary-medium border-1 border-black rounded-2 text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" value={formData.brand} onChange={onHandlechange}>
                                    <option>Choose a Brand</option>
                                    <option value="Adidas">Adidas</option>
                                    <option value="Xbox">Xbox</option>
                                    <option value="Tata">Tata</option>
                                    <option value="LG">LG</option>
                                </select>
                            </div >

                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <label
                            htmlFor="image"
                            className="absolute text-sm font-bold text-body duration-300 transform -translate-y-8"
                        >
                            Product Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="block py-1 px-0 w-full text-sm font-bold text-heading bg-transparent border-bottom-1 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            required=""
                            onChange={OnHandleFileChange}
                        />
                    </div>
                    {
                        imagePreview && (
                            <img src={imagePreview} alt="" className='max-h-40 mb-4' />
                        )
                    }


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

export default EditProduct;
