import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <>
            {/* <div className="display-4 text-center">Router Class</div> */}
            <nav class="navbar navbar-expand-sm bg-white shadow-sm  sticky-top">
            <a class="navbar-brand" href="#">REACT CLASS</a>
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <Link class="nav-link" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/about'>About us</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/Formclass'>users</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/effect'>effect</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/context'>Context</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/reducer'>Reducer</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/darshboard'>darshboard</Link>
                </li>
            </ul>
            </nav>

        </>
    )
}
export default Navbar;