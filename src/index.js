import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import axios from "axios";

//setting base Url globaly
//axios.defaults.baseURL = 'https://accountservicereact.herokuapp.com/account';

//how to set a common header on request
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

//how to set a common header on request on specefic method
axios.defaults.headers.post['Content-Type'] =  'application/json';

  axios.interceptors.request.use(requestConfg=>{
    console.log("request : "+requestConfg);
    //Edit request config
    return requestConfg;
},error=>{
    console.log("axios request intercetor error :"+error);
    return Promise.reject();
});

axios.interceptors.response.use(responsetConfg=>{
    console.log("response : "+responsetConfg);
    return responsetConfg;
},error=>{
    console.log("axios response intercetor error :"+error);
    return Promise.reject();
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
