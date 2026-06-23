import React from "react";
import { useState, useEffect } from "react";

const HookEffect = () => {


    // useEffect(() => {
    //     console.log("Component Loaded.......");

    // })


    // useEffect(() => {
    //     console.log("Component Loaded.......");

    // }, [])

    const [count, setCount] = useState(0);

    const [name, setName] = useState("");

    useEffect(() => {

        console.log("count Chnaged....");

    }, [count, name])


    //  useEffect(() => {
    //     console.log("component Mount");

    //     return() => {
    //         console.log("Component Unmount");
            
    //     } 
        
    //  },[])


    useEffect(()=> {
        const timer = setInterval(()=> {
            setCount(prev => prev +1)
        },1000)

        return() => {
            clearInterval(timer)
        }

    },[])


    return (

        <div>
            <h1>
                HEllo Mrs Tushar Patel....
            </h1>

            <p> {count}</p>
            <button onClick={() => { setCount(count + 1) }}>Increment </button>
        <br/>
            <input type="text" onChange={(e) => {setName(e.target.value)}} />

            <p> Name:-- {name}</p> 
        
        </div>

    );

};

export default HookEffect