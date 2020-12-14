import React, { useState } from 'react';
import Control from './Control';
import Counter from './Counter'
import Controlbtn from './Controlbtn';
import Addcom from './Addcom';
import './home.css';
function Home(){
    // let items = [
    //             {img:'fa fa-car'},
    //             {img:'fa fa-street-view'},
    //             {img:'fa fa-taxi'},
    //             {img:'fa fa-save'},
    //             {img:'fa fa-save'}
    //         ];
    let [count, setCount] = useState(0);
    let increase =()=>{
      setCount(count +=1);
    //   alert('podbop');     
    }
    let decrease = ()=>{
        setCount(count -=1);
    }
    let [num,setNum] = useState([
        {value:0,img:'fa fa-car'},
        {value:0,img:'fa fa-street-view'},
        {value:0,img:'fa fa-taxi'},
        {value:0,img:'fa fa-save'},
        {value:0,img:'fa fa-save'}
    ]);
    let carincrease = (value,index) =>{
        let newcount = num.map((t,id) => id == index?{...t,value:value+=1}:t);
        setNum(newcount);
    }
    let cardecrease = (value,index) =>{
        console.log(num)
        if(num[index].value == 0){
            alert('it lower than 0');
        }else{
            let newcount = num.map((t,id) => id == index?{...t,value:value-=1}:t);
            setNum(newcount);
        }
    }
    let removeVehicle = (index) =>{
        let delVehivle = num.filter((v,i) => i !==index);
        setNum(delVehivle);
    }
    // let check;
    // let setvalue = (event) =>{
    //      check = event.target.value;
    // }
    // let spd
    let [vehicle, setVehicle] = useState([])
    let addCheck = (value) => {
        vehicle = [...vehicle,value];
        setVehicle(vehicle);
        console.log(vehicle);
    }
    // let [length, setlength] = useState();
    let addVehicle = (value,a)=>{
    //   let length = vehicle.map((v,x) => x == a?{...v,value:value+=1}:v);
    let length = vehicle.map((v,i) => {
        if(i == a){
           let val={...v,value:value+=1}
        }
        else{
            console.log("no")
        }
    });
        // console.log(length);
        setVehicle(length);
            // setlength(length);
    }
    return(
        <>
            <div>
                <ul>
                    {num.map((item,id)=>{
                       return <div key={id} className="row">
                                <div className="col-md-2">
                                  <i className={item.img}></i>
                                </div>
                                <div className="col-md-4"> 
                                    <Controlbtn onremove={removeVehicle} ondecrease={cardecrease} onincrease={carincrease} vehicle = {item.value} index={id}/>
                                </div>
                                <div className="col-md-2">
                                    <div>{item.value}</div>
                                </div>
                                    {/* <button className="ml-2" onClick={()=>carincrease(item.value,id)}>Add</button> */}
                            </div>
                    })}
                </ul>
                {/* <h6>{count}</h6> */}
                <div>
                    {vehicle.map((itvehicle,n)=>{
                        return <div key={n}>
                                    <div>
                                        <div>{itvehicle.data}</div>
                                        <div>{itvehicle.value}</div>
                                        <button onClick={()=>addVehicle(itvehicle.value,n)}>AddVehicle</button>
                                    </div>                                
                                </div>
                    })}
                    {/* <button onClick={addCheck}>Addto</button> */}
                    <Addcom onAdd={addCheck}/>
                </div>
                <Counter  count={count}/>
                <Control increase={increase} decrease={decrease}/>
            </div>
        </>
    );
}
export default Home;