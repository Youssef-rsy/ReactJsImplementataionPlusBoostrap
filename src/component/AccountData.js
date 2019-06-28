import React , { Component }from "react";
import AccountService from "../service/AccountService";

export default  class AccountData extends Component{

    state={
        account:{
            accountId:null,
            accountOwner:null,
            balance:null,
            creationDate:null,
        }
       
    }
    componentDidMount(){
        console.log(this.props)
        AccountService.get("/"+this.props.match.params.accountId)
        .then((account)=>{
            this.setState({
                    account:account
            })
        })
        .catch((error)=>{
            console.log("error : "+ error)
        })
    }

    render(){
        return(
            <div className="card text-center">
                <div className="card-header">
                    Account Information
                </div>
                <div className="card-body">
                <h5 className="card-title">{this.state.account.accountOwner}</h5>
                <p className="card-text">created date : {this.state.account.creationDate} .</p>
                <span className="h6"> {this.state.account.balance}</span>>
                </div>
                <div className="card-footer text-muted">  </div>
            </div>
        )
    }
   

}