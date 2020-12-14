import React,{useRef} from 'react'
import { useSelector, useDispatch} from "react-redux"
// import React from 'react'

 function ReduxClass() {
     const counter  = useSelector(state => state.counter)
     const dispatch = useDispatch();
     let con = useRef(null)
     let handleIncrease = () =>{
         con = con.current.value;
         dispatch({type:"INCREASE", payload:con});
     }
     let handleDecrease = () =>{
        dispatch({type:"DEACREASE"});
    }
    let handleChange =()=>{
        let value= con.current.value
        dispatch({type:"UPDATE_NAME",payload:value});
    }
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center p-5">
                    <div class="col-md-7 text-center">
                            <div class="display-4">COUNTER</div>  <h2 class="">{counter}</h2>
                            <input onChange={handleChange} ref={con} class="form-control" type="number"/><br></br>
                            <button class="btn btn-primary" onClick={()=>handleIncrease()}>ADD</button>
                            <button class="btn btn-danger ml-3" onClick={()=>handleDecrease()}>Minus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReduxClass
