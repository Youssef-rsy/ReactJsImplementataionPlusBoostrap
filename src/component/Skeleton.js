import React from "react";
import ListAccount from './ListAccount'
import AddAccount from "./AddAccount";
import Logo  from "../images/logo.svg";
export default function Skeleton(){
    return (
        <div className="container col-12">
          <div className="row col-12">
            <nav className="navbar navbar-light bg-dark col-12 ">
              <img  src={Logo} width="3%" />
              <span className="navbar-brand mb-0 h1 text-light">Account Service - React Implementation</span>
            </nav>
          </div>
          <div className="row mt-4 mx-2">
            <div className="col-7">
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal"> 
                    Add New Account
                </button>
                <AddAccount/>
            </div>
            <div className="col-5">
                <div className="alert alert-danger alert-dismissible fade hide float-left col-10" role="alert">
                  <strong>Error!</strong>error message.
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
            </div>
          </div>
         <div className="row">
            <ListAccount/>
         </div>
        </div>
    )
}