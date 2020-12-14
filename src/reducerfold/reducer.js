// const { act } = require("react-dom/test-utils")

const defaultState ={
    counter: 0
}
export default function reducer (state = defaultState, action){
    if (action.type =="INCREASE"){
        let value = action.payload;
        if(value < 0){
          let newState = {...state, counter:0}
          return  newState
        }else{
            let newState = {...state, counter:state.counter+ Number(value)}
            return newState;
        }
    }
    if (action.type =="DEACREASE"){
        let value = action.payload;
        if ( value < 0){
             let newState = {...state, counter:0}
          return  newState

        }else{
            let newState = {...state, counter:state.counter-1}
            return newState;
        }
    }
    if(action.type =="UPDATE_NAME"){
        let value = action.payload;
        let newState = {...state, value:value}
        return newState;
    }
    return state

}