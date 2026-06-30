import React from "react";
import { useReducer } from "react";



const ItemReducer4 = () => {

    const intialstate = {count :  10 , count2 : 20};

    const Reducer = (state, action) =>{

        switch(action.type){

            case 'INCREMENT' :
                return {count : state.count + 1} ; 

            case 'DECREMENT' : 
                if(state.count > 0){

                    return {count : state.count - 1};
                }
                return state;

            case 'RESET':
                return intialstate;

            default :
            return state;

            
        }

    }

    const Reducer1 = (state, action) =>{

        switch(action.type){

            case 'INCREMENT' :

                return {count2 : state.count2 + 1}; 

            case 'DECREMENT' : 

                if([state.count2] > 0 ){

                    return {count2 : state.count2 - 1};
                }
                return state;

            case 'RESET':
                return intialstate;

            default :
            return state;
            
        }

    }

    const [count , dispatch] = useReducer(Reducer ,intialstate)
    const [count2 , dispatch1] = useReducer(Reducer1 ,intialstate)

    return(
        <div>

            <div>
                UseReducer Hook in React
            </div>

            <div>
                Counter1 :- {count.count}

            </div>

           

            <div>
                <button onClick={() => dispatch({type : 'INCREMENT'})}> INCREMENT</button>
                <button onClick={() => dispatch({type : 'DECREMENT'})}> DECREMENT</button>
                <button onClick={() => dispatch({type : 'RESET'})}> RESet</button>
            </div>

            
            <div>
                Counter2 :- {count2.count2}

            </div>

            <div>
                <button onClick={() => dispatch1({type : 'INCREMENT'})}> INCREMENT</button>
                <button onClick={() => dispatch1({type : 'DECREMENT'})}> DECREMENT</button>
                <button onClick={() => dispatch1({type : 'RESET'})}> RESet</button>
            </div> 




        </div>
    )
}


export default ItemReducer4;

