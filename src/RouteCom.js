import React,{useState} from "react";
import Navbar from './Navbar'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

// pages

import About from './About';
import Main from './Main';
import Notfound from './Notfound'
import Formclass from './class-4/index';
import View from './View';
import Effect from "./EffectClass";
import Context from "./contextApi/Context";
import Reducer from "./reducerclass/Reducer";
import Darshboard from "./guardRoute/dashboard";
import Guard from "./guardRoute/Guard";
function Routecom(){
    let [state, setstate] = useState(4)
    return(
        <>
            <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/Formclass"><Formclass/></Route>
                    <Route path="/Formclas/:name" children={<View/>}></Route>
                    <Route path="/effect" component={Effect}/>
                    <Route path="/context" component={Context}/>
                    <Route path="/reducer" component={Reducer}/>
                    {/* <Route path="/darshboard" component={Darshboard}/> */}
                    <Guard path="/darshboard" component={Darshboard} condition={state >= 18}/>
                    <Route path="*">
                        <Notfound/>
                    </Route>
                </Switch>
            </Router>
            {/* <div className="display-4 text-center">Router Class</div> */}
        </>
    )
}
export default Routecom;