import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// le state initial
const initialState = {
    // finir de faire le state
    employees:[]
}
// mon action
export const RESPONSEDATA = (employees)=> ({
    type: 'RESPONSEDATA',
    payload: {employees}
})
// mon reducer
function reducer(state= initialState, action){
    if(action.type === "RESPONSEDATA"){
        return{
            ...state,
            ...state.employees.push(action.payload)

        }
    }
    return state
}

export const store = createStore(reducer, composeWithDevTools())
