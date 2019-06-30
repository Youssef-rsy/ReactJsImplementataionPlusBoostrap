import React ,{Component} from 'react';
import AddAccount from "./AddAccount";
import Delete  from "../images/delete.svg";
import Plus  from "../images/plus.svg";
import Remove  from "../images/remove.svg";
import DeletePromp from './DeleteAccount';
import CreditPromp from './CreditAccount';
import DebitPromp from './DebitAccount';
import AccountService from '../service/AccountService'
import {Link} from "react-router-dom";
class App extends Component {
  
  
  state={
    acountId:null,
    accounts: []
  }
  componentDidMount (){
    AccountService.get("/")
    .then((response)=>{
        this.setState({
          accounts:response.data
        })
    } )
    .catch((e)=>{
      console.log(e);
    });
  }
  selectedAccount=(id)=>{
    this.setState({
      acountId:id
    })
  }
  deleteAccount=(id)=>{
    AccountService.delete("/"+id)
    .then((response)=>{
      this.componentDidMount() 
      console.dir(response);
    })
    .catch((error)=>{
        console.log(error);
    })
    
  }
  AddAccount=()=>{
    this.componentDidMount() 
  }
  
  render(){
    const accounts = this.state.accounts.map(account=>{
      return(
       
          <tr key={account.accountId}>
            <td> <Link to={"/"+account.accountId}>{account.accountOwner}</Link></td>
            <td>{account.balance}</td>
            <td>{account.creationDate}</td>
            <td className="w-50">
                <a className=""> 
                  <img data-toggle="modal" data-target="#creditPromp" src={Plus} width="3%" onClick={()=>{this.selectedAccount(account.accountId)}} />
                  </a>
                <a className="">
                   <img data-toggle="modal" data-target="#debitPromp" src={Remove} width="3%"  onClick={()=>{this.selectedAccount(account.accountId)}}/>
                   </a>
                <a className=""> 
                  <img  data-toggle="modal" data-target="#deletePromp" src={Delete} width="3%" onClick={()=>{this.selectedAccount(account.accountId)}} />
                </a>
            </td>
          </tr>
       
    )});
    const accountList =  accounts.length ? ( accounts) :(
    
        <tr>
            <td colSpan="4" className="text-center  font-weight-bold bg-info" >No Data To Display : Please Try Again !!</td>
        </tr>
    );
    return (
    <div>
       <div className="row  mt-4 mx-2">
            <div className="col-7">
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal"> 
                    Add New Account
                </button>
                <AddAccount  />
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
      <div className="container row col-12 p-5">
          <CreditPromp accountId={this.state.acountId}/>
          <DebitPromp accountId={this.state.acountId}/>
          <DeletePromp deleteAccount={this.deleteAccount} accountId={this.state.acountId} />
          <table className="table col-12">
              <thead>
                <tr>
                  <th scope="col-3">FullName</th>
                  <th scope="col-4">Balance</th>
                  <th scope="col-4">Creation Date</th>
                  <th scope="col-1">Operation</th>
                </tr>
              </thead>
              <tbody>
                  {accountList}            
              </tbody>
            </table>
        
      </div>

    </div>
    );
  }
 
}

export default App;
