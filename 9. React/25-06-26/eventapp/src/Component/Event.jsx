import React, { useState } from "react";

export const Button = () => {

    const handleclick = () => {

        alert("Button Clicked........")
    }

    return(
        <>
            <button onClick={handleclick}>Click me</button>
        </>
    )


}

export const Input = () => {

    const [name, setName] = useState("")

    return(

     <>
     
     <input type="text" onChange={(e) => setName(e.target.value)} />

        <h2>{name}</h2>
     </>

    )

}

export const MouseEvent = () => {

    return(

        <>
            <div onMouseEnter={() => { console.log("Mouse Entered......")} } onMouseLeave={() => { console.log("Mouse Leave......");
            }}>
                Hover Here
            </div>
        </>

    )

}


export const DoubleClick = () => {

    const clickdouble = () =>{
        alert("Double Clickedd......")
    }

    return(

        <>
            <button onDoubleClick={clickdouble}>CLick On Dubble Click</button>
        </>
    )

}

