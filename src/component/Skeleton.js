import React from "react";
import ListAccount from './ListAccount'
import Logo  from "../images/logo.svg";
import {NavLink , Switch , Redirect} from "react-router-dom";
import Home from "./Home"
import {Route} from "react-router-dom"
import AccountInfo from "./AccountInfo";
export default function Skeleton(){
    return (
        <div className="container col-12">
          <div className="row col-12">
            <nav className="navbar navbar-light bg-dark col-12 ">
              <span className="d-block col-auto">
                <img  src={Logo} width="50%"  alt="React log"/>
              </span>
              <div className="col-4 float-left"> 
                <NavLink to="/" className="col-1"  >Home</NavLink>
                <NavLink to="/ListAccount" className="col-2">Manage Account</NavLink>
              </div>
              <span className="navbar-brand mb-0 h1 text-light ">Account Service - React Implementation</span>
            </nav>
          </div>
         
         <div className="row col-12">
          <Switch>
            <Route exact path="/" component={Home} ></Route>c
            <Route path="/ListAccount"  component={ListAccount} ></Route>
            <Route path="/:accountId"  component={AccountInfo} ></Route>
            <Redirect from="/ok" to="/"/>
          </Switch>
         </div>
        </div>
    )
}