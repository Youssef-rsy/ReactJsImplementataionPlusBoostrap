import React,{ Component } from "react";
import './App.css';
import Skeleton from "./component/Skeleton"
import {BrowserRouter} from "react-router-dom" 

export default class App extends Component {
    render(){
        return(
        <BrowserRouter>
        <div className="container col-12 ">
              <Skeleton/>
           </div>
        </BrowserRouter>
        )
    }
}

