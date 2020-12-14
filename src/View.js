import React from 'react';
import {useParams} from 'react-router-dom'
function View(){
    let {name} = useParams();
    return(
        <>
            <div>{name}</div>
        </>
    )

}
export default View;