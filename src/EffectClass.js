import React, { useEffect, useState } from 'react';
function Effect(){
    let [value, setvalue] = useState(0)
    let [title, settitle] = useState(0)
    let [size,setsize] = useState(0)
    const getsize = () =>{
        setsize (window.innerWidth)
    }
    let [state,setstate] = useState()
    useEffect(()=>{
        console.log("USE EEFECT()")
        if(value > 0 ){
            document.title = `my count(${value})`;
        }
        window.addEventListener('resize',getsize);
        return(()=>{
            window.removeEventListener('resize',null);
        })
    },[value])
    let handleChange = (e) =>{
       let y = e.target.value 
       setstate(y)
    }
    console.log("render component")
    return(
        <>
            <div className="text-center">
                <h3 >Effect Class</h3>
                    <p>{value}</p>
                    <p>{size}</p>
                    <input type="" onChange={handleChange}/>
            <button className="btn btn-outline-secondary" onClick={()=>setvalue(value+1)}>Increase</button>
            </div>
        </>
    )
}
export default Effect;