import { ADD_X, DECREMENT, DIVIDE_X, INCREMENT, MULTIPLY_X, SUBTRACT_X } from "./types";


export const reducer = (state = { count : 0 }, {type, payload}) => {
    switch ( type ){
        case INCREMENT : {
            state.count++;
            return { ... state }
        }
        case DECREMENT : {
            state.count--;
            return { ... state }
        }
        case ADD_X : {
            state.count = state.count + payload;
            return { ... state }
        }
        case SUBTRACT_X : {
            state.count = state.count - payload;
            return { ... state }
        }
        case MULTIPLY_X : {
            state.count = state.count * payload;
            return { ... state }
        }
        case DIVIDE_X : {
            if ( payload === 0 ){
                alert("Not Possible");
                return state;
            }
            state.count = state.count / payload;
            return { ... state }
        } 
        default : {
            return state;
        }
    }
}