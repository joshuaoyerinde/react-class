import React from 'react';
const Control = (props) =>{
    let {increase, decrease} = props;
    return(
        <>
            <div>
                <button onClick ={increase}>Increase</button>
                <button onClick ={decrease}>decrease</button>
            </div>
        </>
    );
}
export default Control;