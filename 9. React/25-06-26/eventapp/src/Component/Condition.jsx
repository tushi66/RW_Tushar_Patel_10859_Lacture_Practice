import React from "react";

export const Render = () => {

    const islogin = false;

    if(islogin){
        return <h1>Welcome to the Page</h1>
    }

    return <h1> Please Login Again.....</h1>
}