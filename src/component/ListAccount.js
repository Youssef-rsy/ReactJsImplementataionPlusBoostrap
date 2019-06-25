import React ,{Component} from 'react';
import Delete  from "../images/delete.svg";
import Plus  from "../images/plus.svg";
import Remove  from "../images/remove.svg";
import DeletePromp from './DeleteAccount';
import CreditPromp from './CreditAccount';
import DebitPromp from './DebitAccount';
class App extends Component {
  
  state={
    acountId:null,
    accounts:[
      {accountId:1 , accountOwner: "youssef rossamy", balance: "21130.22", creationDate: "2019-06-29"},
      {accountId:2 , accountOwner: " youssef jamoure", balance: "51130.99", creationDate: "2018-02-28"}]
  }
  selectedAccount=(id)=>{
    this.setState({
      acountId:id
    })
  }
  deleteAccount=(id)=>{
    console.log(id);
  }
  render(){
    const accounts = this.state.accounts.map(account=>{
      return(
          <tr key={account.accountId}>
            <td >{account.accountOwner}</td>
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
    return (
      <div className="container row col-12 p-5">
      <CreditPromp accountId={this.state.acountId}/>
      <DebitPromp accountId={this.state.acountId}/>
      <DeletePromp deleteAccount={this.deleteAccount} accountId={this.state.acountId} />
      <table className="table col-12">
          <thead>
            <tr>
              <th scope="col-2">FullName</th>
              <th scope="col-4">Balance</th>
              <th scope="col-4">Creation Date</th>
              <th scope="col-2">Operation</th>
            </tr>
          </thead>
          <tbody>
              {accounts}            
          </tbody>
        </table>
        
      </div>
    );
  }
 
}

export default App;
