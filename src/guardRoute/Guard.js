import React, { Component } from 'react'
import {Redirect, Route} from "react-router-dom"
// import Darshboard from './dashboard'

function Guard(props) {
    let {component:Component, condition} = props;
    return (
        <Route  render={()=>{
            return condition ? <Component /> : <Redirect to="/"/>
        }}/>
    )
}

export default Guard;
