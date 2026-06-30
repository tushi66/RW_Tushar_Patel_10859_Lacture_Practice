import React from "react";
import { useReducer } from "react";



const ItemReducer5 = () => {

   const initialState = {
    counters:[
        {id:1 , count:10},
        {id:2 , count:20}
    ],
    total:30
}

    const Reducer = (state, action) =>{

        switch(action.type){

            case 'INCREMENT' :
                return [ { count : state.counters.count + 1 }] ; 

            case 'DECREMENT' : 
                if(state.count > 0){

                    return {count : state.counters.count - 1};
                }
                return state;

            case 'RESET':
                return initialState.counters;

            default :
            return state;

            
        }

            
    }

    // const Reducer1 = (state, action) =>{

    //     switch(action.type){

    //         case 'INCREMENT' :

    //             return {count2 : state.count2 + 1}; 

    //         case 'DECREMENT' : 

    //             if([state.count2] > 0 ){

    //                 return {count2 : state.count2 - 1};
    //             }
    //             return state;

    //         case 'RESET':
    //             return intialstate;

    //         default :
    //         return state;
            
    //     }

    // }

    const [count , dispatch] = useReducer(Reducer ,initialState)
    // const [count2 , dispatch1] = useReducer(Reducer1 ,intialstate)

    return(
        <div>

            <div>
                UseReducer Hook in React
            </div>

            <div>
                Counter1 :- {count.counters.count}
                

            </div>
            
           

            <div>
                <button onClick={() => dispatch({type : 'INCREMENT'})}> INCREMENT</button>
                <button onClick={() => dispatch({type : 'DECREMENT'})}> DECREMENT</button>
                <button onClick={() => dispatch({type : 'RESET'})}> RESet</button>
            </div>

            
            {/* <div>
                Counter2 :- {count2.count2}

            </div>

            <div>
                <button onClick={() => dispatch1({type : 'INCREMENT'})}> INCREMENT</button>
                <button onClick={() => dispatch1({type : 'DECREMENT'})}> DECREMENT</button>
                <button onClick={() => dispatch1({type : 'RESET'})}> RESet</button>
            </div>  */}




        </div>
    )
}


export default ItemReducer5;

