import { INCREMENT , DECREMENT , RESET } from "./constant"

// const initialState = 10
const initialState = [ {count : 0} ]
    


const CountReducer = (state = initialState , action) => {
    switch(action.type){
        // case INCREMENT : return state + 1
        // case DECREMENT : return state > 0 ? state - 1 : 0
        // case RESET : return state = 0

        case INCREMENT : return  [{ count:state[0].count + 1}]
        case DECREMENT : return [ {count: state[0].count > 0 ? state[0].count - 1 : 0 }]
        case RESET : return [{count: 0}]
        default: return state
    }
}

export default CountReducer

