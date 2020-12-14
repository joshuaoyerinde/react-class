import React,{useState,useRef} from 'react';
import {Link} from 'react-router-dom';
function Formclass(){
    // let [age, setAge] = useState("");
    
    let [users, setUsers] = useState([])
    let inputCon = useRef(null)
    let handleSubmit = (e) =>{
        e.preventDefault();
        let newusers = {name:person.name,age:person.age}
        users = [...users,newusers]
        setUsers(users);
        console.log(users)
        
        // console.log(name,age)
        // document.getElementById("demo").value ="";
        // v = e.target.value;u
    }
    
    let [person, setPerson] = useState({name:"",age:""});
    // let age;
    let handleChange =  (e) =>{
        let  name = e.target.name;
         let age = e.target.age;
         let value =e.target.value
        console.log(name,value)
        // person = {...person,[name]: value,[age]:value}
        setPerson((oldu)=>{
            return {...oldu,[name]: value,[age]:age}
        });
    }
    // let handleAge =  (e) =>{
    //     let v = e.target.value;
    //     setAge (v);
    // }
    let use = ()=>{
        let uu = 'not found'
        console.log(inputCon.current.value);
    }
    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 p-5 shadow-sm">
                        <div className="display-4 text-center">Formclass</div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="demo" className="form-control" name="name" value={person.name} onChange={handleChange}/>
                            </div> 
                            <div className="form-group">
                                <input type="text" id="demo" className="form-control" name="age" value={person.age} onChange={handleChange}/>
                            </div> 
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                        {/* <div>{name}</div> */}
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr></tr>
                            </thead>
                                {users.map((details,i)=>{
                            return <tr key={i}>
                                        <td><div>{details.name}</div></td> 
                                        <td><div>{details.age}</div></td> 
                                        <td><Link to={`/Formclas/${details.name}`}>View</Link></td> 
                                    </tr>
                    })}
                    </table>
                </div>
                <div className="row">
                    <p ref={inputCon}></p>
                    <input className="form-control" ref={inputCon}/>
                    <button className="btn btn-primary" onClick={use}>Useref</button>
                </div>
            </div>
        </>
    );
}
export default Formclass;