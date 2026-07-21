import React from "react";
import PageList  from "./PageList";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import ComponentList from "../Component/ComponentLsit";

const Layout = () => {


    return(
        <>
        <BrowserRouter>

            <ComponentList.MyNavbar />

            <Routes>
                <Route path="/" element={<PageList.Home/>} />
                <Route path="/about" element={<PageList.AboutUs/>} />
                <Route path="/contact" element={<PageList.ContactUS/>} />
                <Route path="/product" element={<PageList.Product/>} />
                <Route path="/login" element={<PageList.Login/>} />
                <Route path="/register" element={<PageList.Register/>} />
                <Route path="/profile" element={<PageList.Profile/>} />
                <Route path="*" element={<PageList.Error/>} />

                
            </Routes>
        </BrowserRouter>
        </>

    )
}

export default Layout;
