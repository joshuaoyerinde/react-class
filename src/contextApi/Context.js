import React, { useRef, useEffect,  useState, createContext } from 'react';
import './context.css';
let Mycontext=createContext();
function Context(){
    let inputcon = useRef(null);
    let [names,setname] = useState([]);
    useEffect(()=>{
        inputcon.current.focus();
    })
    let handleSubmit = (e) =>{
        e.preventDefault();
        let name = inputcon.current.value;
        // console.log(names)
        // names = [...names,name]
       setname([...names,name]);
    }
    let remove = (index) =>{
        setname(names.filter((n,i)=> i !==index));
    }
    return(
        <>
        <Mycontext.Provider value={{remove:remove}}>
            <div className="container bg-secondary p-5 mt-5 ">
                <div className="row">
                    <div className="col-6 col-md-6 text-center border-right">
                        <form onSubmit = {handleSubmit}>
                            <input ref={inputcon} className="form-control"/>
                            <button className="form-control btn btn-outline-success mt-3 text-white">Add</button>
                        </form>
                    </div>
                    <div className="col-6 col-md-6">
                        
                        <List nameArray={names}/>
                    </div>
                </div>

            </div>
        </Mycontext.Provider>
        </>
    )
}
function List(props){
    let {nameArray,remove} = props;
    return(
        <>
            <div className="container text-white">
            <h5>Mylist</h5>
            {nameArray.map((name,index)=>{
               return <Singlename key={index} name={name} index={index}/>
            })}
            </div>
        </>
    )
}
function Singlename(props){
    let context = React.useContext(Mycontext);
    let {remove} = context;
    let {name, index} = props; 
    return(
        <>
            <div className="container text-white">
                <ul class="list-group" key={index}>
                    {/* <li class="list-group-item active">Active item</li> */}
                    <li class="list-group-item text-dark">{name} <button className="btn btn-sm btn-danger" onClick={()=>remove(index)}><i className="fa fa-trash"></i></button></li>
                </ul>
            </div>
        </>
    )
}
export default Context;