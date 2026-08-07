import React from "react";
import PageList from "./PageList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentList from "../Component/ComponentLsit";
import AddProduct from "../Component/Add_Prodect";
import EditProduct from "../Component/EditProduct";
import {AuthProvider} from "../Hooks/Costumhook"

const Layout = () => {


    return (
        <>
            <AuthProvider>
                <BrowserRouter>

                    <ComponentList.Header />

                    <Routes>
                        <Route path="/" element={<PageList.Home />} />
                        <Route path="/about" element={<PageList.AboutUs />} />
                        <Route path="/contact" element={<PageList.ContactUS />} />
                        <Route path="/product" element={<PageList.Product />} />
                        <Route path="/login" element={<PageList.Login />} />
                        <Route path="/register" element={<PageList.Register />} />
                        <Route path="/profile" element={<PageList.Profile />} />
                        <Route path="/add_product" element={<AddProduct />} />
                        <Route path="/edit_product/:id" element={<EditProduct />} />
                        <Route path="*" element={<PageList.Error />} />


                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>

    )
}

export default Layout;
