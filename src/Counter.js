import React from 'react';
function Counter (props){
    let {count} = props
    return(
        <>
            <h3>this is actually {count} count</h3>
        </>
    )
}
export default Counter;