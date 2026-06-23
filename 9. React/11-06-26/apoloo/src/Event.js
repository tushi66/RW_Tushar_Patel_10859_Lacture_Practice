import React from "react";

const Event = () =>{

    const handleClick = () =>{ 

        alert("Hello React User/.............");
    }

    return(

        <div>
            <button onClick={handleClick}>Click Me </button>
            <button onClick={ () => alert("hello World!!!!")}>Click Me </button>
        </div>
    )


}

export default Event