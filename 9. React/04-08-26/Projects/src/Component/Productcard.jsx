import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png"

const Productcard = ({ item }) => {

    const rawImage = Array.isArray(item?.image) ? item.image[0] : item?.image
    const imageSrc = rawImage ? encodeURI(rawImage) : heroImage



    const navigate = useNavigate();

    const Edit_form = () => {
        navigate(`/edit_product/${item.id}`);
    };



    const DeleteProduct = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `http://localhost:5000/products/${item.id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                alert("Product deleted successfully!");

                // Refresh the page
                window.location.reload();
            } else {
                alert("Failed to delete product.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        }
    };

    return (
        <>
            <div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">

                <div className="flex justify-end gap-2">
                    <button
                        onClick={Edit_form}
                        className="bg-blue-600 text-white px-4 py-2 mb-2 rounded hover:bg-blue-700"
                    >
                        Edit Product
                    </button>
                    <button
                        onClick={DeleteProduct}

                        className="bg-blue-600 text-white px-4 py-2 mb-2 rounded hover:bg-blue-700"
                    >
                        Delete
                    </button>
                </div>

                <a href="#">
                    <img
                        className="rounded-base mb-6"
                        src={imageSrc}
                        alt={item.title}
                        style={{
                            width: "250px",
                            height: "250px",
                            border: "2px solid red",
                            objectFit: "cover",
                        }}

                    />
                </a>

                <div>
                    <div className="flex items-center space-x-3 mb-6">

                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg
                                className="w-5 h-5 text-fg-yellow"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                            <svg
                                className="w-5 h-5 text-fg-yellow"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                            <svg
                                className="w-5 h-5 text-fg-yellow"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                            <svg
                                className="w-5 h-5 text-fg-yellow"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                            <svg
                                className="w-5 h-5 text-fg-yellow"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                        </div>
                        <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                            4.8 out of 5
                        </span>
                    </div>
                    <h5 className="text-2xl text-heading font-bold tracking-tight">
                        {item.title}
                    </h5>
                    <h5 className="text-lg font-semibold tracking-tight">
                        {item.description}
                    </h5>
                    <a href="#">
                    </a>
                    <div className="flex items-center justify-between mt-6">
                        <span className="text-3xl font-extrabold text-heading">${item.price}</span>
                        <button
                            type="button"
                            className="inline-flex items-center bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                        >
                            <svg
                                className="w-4 h-4 me-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                                />
                            </svg>
                            Add to cart
                        </button>


                    </div>
                </div>
            </div>


        </>

    )
}

export default Productcard;

