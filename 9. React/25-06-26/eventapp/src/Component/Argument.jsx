import React from "react";

export const ShowName = () => {

    const showName = (name, age) => {
        alert (`${name} ${age}`)
    }

    return(

        <>
            <button onClick={() => showName('Tushar', 28)} >Click Me show name </button>
        </>
    )
} 

export const DataMap = () => {

    const std = ["Tushar", "Jay", "Yash"]

    const handlestd = (name) => {

        alert(name)
    }

    return(
        <>
        {
            std.map((s,index) => {
                return(

                    <button key={index} onClick={ () => handlestd(s)}> {s}</button>
                )
            })
        }
        
        </>
    )
}

export const ObjectData = () => {

    const stddd = {
        id:1,
        name:"Tushar",
        age:28
    }

    const showstd = (data) =>{
        console.log(data);
        
    } 

    return(

            <button onClick={() => showstd(stddd)}>SHow student data</button>

    )
}