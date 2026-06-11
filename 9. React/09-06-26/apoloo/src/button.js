import React from "react";

const Button = () =>{

return(
    <div>
        <button>
            Click
        </button>
        <Button1/>

    </div>
)    

}

export default Button

export const Button1 = () => {
    return(
        <>
            <button>Review</button>
        </>
    )
}