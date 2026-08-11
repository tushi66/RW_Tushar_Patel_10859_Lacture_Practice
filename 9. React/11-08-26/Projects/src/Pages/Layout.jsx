import React from "react";
import PageList from "./PageList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentList from "../Component/ComponentLsit";
import AddProduct from "../Component/Add_Prodect";
import EditProduct from "../Component/EditProduct";
import {AuthProvider} from "../Hooks/Costumhook"
import ProtectedRoute from "../Component/ProtectedRoute";

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
                        <Route path="/profile" element={<ProtectedRoute><PageList.Profile /></ProtectedRoute>} />
                        <Route path="/add_product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
                        <Route path="/edit_product/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
                        <Route path="*" element={<PageList.Error />} />


                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>

    )
}

export default Layout;
