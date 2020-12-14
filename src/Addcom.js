import React, {useState} from 'react';
function Addcom(props) {
    // let check;
    // let objcar;
    let {onAdd} = props;
    let [state, setstate] = useState({});
    let setvalue = (event) =>{
         state = {data:event.target.value}; 
         let value = 0; 
         state = {...state,value:value}
    }
    return(
        <>
             <input type="text"  onChange={setvalue}/>
            <button onClick={()=>onAdd(state)}>Add</button>
        </>
    )
}
export default Addcom;