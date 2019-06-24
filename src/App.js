import React,{ Component } from "react";
import './App.css';
import Skeleton from "./component/Skeleton"

export default class App extends Component {
    render(){
        return(
          <div className="container col-12 ">
              <Skeleton/>
           </div>
        )
    }
}

