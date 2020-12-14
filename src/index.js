import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Formclass from './class-4/index';
import APIClass from './api-class/index'
import Routing from './RouteCom'
import ReduxClass from './reduxclass/ReduxClass'
import reportWebVitals from './reportWebVitals';
import {createStore } from 'redux';
import { Provider } from 'react-redux'
import  reducer  from './reducerfold/reducer'

let mystore = createStore(reducer);

ReactDOM.render(
  <Provider store={mystore}>
    <Routing />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
