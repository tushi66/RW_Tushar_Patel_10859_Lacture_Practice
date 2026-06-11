import React from "react";

// list rendering 

const List = () => {



const StudentName= ["Karan", "Jay", "Manan", "Meg", "Alok", "Fark"];

return(

    <div>
        <ol>
            {
                StudentName.map( (s) => <li key= {s}> {s}</li> )
            }
        </ol>
    </div>
)
}

export default List