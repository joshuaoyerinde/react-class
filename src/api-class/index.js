import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import './index.css';
function APIClass(){
   const url= "https://api.github.com/users"
   const {users,spin} = useFetch(url);
    return(
        <>
            <div class="container">
                <div class="display-3 text-center">
                {/* <div><i class="fa fa-spinner fa-spin"></i></div> */}
                        API CLASS
                    {spin==false? <div><i class="fa fa-spinner fa-spin"></i></div>:""}
                    <div class="row">
                        {users.map((data,i)=>{
                            return   <div class="col-md-4 mb-2" key={i}>
                                        <div class="card">
                                        <div class="card-body">
                                            <div class="text-dark card-title text-name">{data.login}</div>
                                            <a href={data.html_url} target="_blank" rel="noopener noreferrer" class="nav-link">{data.html_url}</a>
                                        </div>
                                    </div>

                            </div>  
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default APIClass
