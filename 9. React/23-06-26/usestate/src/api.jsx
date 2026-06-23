import React from "react";
import { useState, useEffect } from "react";

const Apicall = () => {
    const [user, setUser] = useState([])


    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setUser(data));

    },[])

    return(
        <div>
            {
                user.map((u)=> <h3 key={u.id}>{u.name}</h3>)
            }
        </div>
    )

}

export default Apicall;