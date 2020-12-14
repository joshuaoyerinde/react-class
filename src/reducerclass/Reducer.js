import React, {useEffect, useRef,useState} from 'react';
import { useReducer } from 'react/cjs/react.development';

function Reducer () {
    let inputcon = useRef(null);
    let [name, setName] = useState("");
    // let [isMsg, setIsMsg] = useState(false)
    // let [names,setname] = useState([]);
    let defaultval = {user:[], name:"", isMsg:false, deleted:""};
    const reducer =(state,action) =>{
        if(action.type =="UPDATE_NAME"){
            let value = action.payload;
            let newState = {...state, name:value}
            return newState;
        }
        if(action.type == "ADD_USER"){
            let value = action.payload;
            let newstate = {...state,user:[...state.user,value],isMsg:true}
            return newstate;
        }
        if(action.type == "MSG"){
            // let value = action.payload;
            let newstate = {...state, isMsg:false}
            return newstate;
        }
        if(action.type == "DELETE_USER"){
            let value = action.payload;
            let newstate = {...state, user:value}
            return newstate;
        }
        if(action.type == "DELETE_MESAGE"){
            let value = action.payload;
            let newstate ={...state, deleted:`${value} deleted`}
            return newstate;
        }
        return state;
    }
    let [state,dispatch] =  useReducer(reducer, defaultval)
    let handleChange = (e) =>{
        let value = e.target.value
        dispatch({type:"UPDATE_NAME",payload:value});
    }
    let handleSubmit = (e) =>{
        e.preventDefault();
        // let name = inputcon.current.value;
        // setmsg("done");
        // console.log(names)
        // names = [...names,name]
        dispatch({type:"ADD_USER",payload:state.name});
        // setIsMsg(true)
        // console.log(names);
    //    setname([...names,name]);
    } 
    let con = useRef(null);
    let handledelete =(name,index)=>{
        let newd = state.user.filter((each,id)=> id !==index);
        // let delname = state.user.find(()) 
        dispatch({type:"DELETE_USER", payload:newd});
        handledelemsg(name)
        console.log(newd)
        console.log(index);
       
    }
   
    let handledelemsg =(name)=>{
         setTimeout(()=>{
             dispatch({type:"DELETE_MESAGE",payload:name})
        //   con = ""
        },2000)
        
       
    } 
    const closeMessage =() =>{
        // setIsMsg(false);
        dispatch({type:"MSG"});
    }
    return(
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6">
                         {state.isMsg && <Info close={closeMessage}/>}
                         <div ref={con}>{state.deleted}</div>
                        <form onSubmit = {handleSubmit}>
                           
                            <div className="form-group">
                                <input onChange={handleChange} value={state.name} className="form-control" />
                                <button type="submit" className="btn btn-primary">ADD</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        {state.user.map((data,i)=>{
                            return <ul key={i}>
                                    <li>{data}<button onClick={()=>handledelete(data,i)}>dele</button></li>
                            </ul>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
const Info = ({close}) => {
    useEffect(()=>{
        setTimeout(()=>{
            close();
        },2000);
    });
    return(
        <>
            <div>Added new User</div>
        </>
    )
}
export default Reducer;