import React from 'react'
import {Link} from 'react-router-dom'
function Notfound(){
    return(
        <>
            <div className="display-4 text-center">404 Not Found</div>
            <Link to="/" className="btn btn-clock btn-danger">sha lemme elp you life</Link>

        </>
    )
}
export default Notfound;