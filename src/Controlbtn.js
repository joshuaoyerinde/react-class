import React from 'react';
function Controlbtn(props){
    let{ondecrease,onincrease,vehicle,index,onremove} = props
    return(
        <>
            <button className="btn btn-success"  onClick={()=>onincrease(vehicle,index)}>Add</button>
            <button className="btn btn-danger" onClick={()=>ondecrease(vehicle,index)}>Minus</button>
            <button className="btn btn-primary" onClick={()=>onremove(index)}>remove</button>
        </>
    )
}
export default Controlbtn;