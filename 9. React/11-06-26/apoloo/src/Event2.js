import React from "react";

export const ALretBtn = ({mesasge , children})  => {


    return (

        <button onClick={ () => alert(mesasge)}>
            {children}

        </button>
    )

}

const BtnList = () => {

    return (

        <>

            <ALretBtn mesasge="Playingggg..... "> Play</ALretBtn>
            <ALretBtn mesasge=" Uploading ....."> Upload</ALretBtn>
        </>
    )
}

export default BtnList