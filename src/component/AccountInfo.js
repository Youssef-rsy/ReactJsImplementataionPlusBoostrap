import React , {Component} from  "react"
import AccountService from "../service/AccountService";


export default class AccountInfo extends Component{

    state={
        account:{ }
    }

    componentDidMount(){
        AccountService.get("/"+this.props.match.params.accountId)
        .then(account=>{
            this.setState({
                account:account
            })
        }).catch( error=>{
            console.log(error)
        }
        )
    }

    render(){
        
        const accountInfo = this.state.account.status == 200 ?(
            <div className="card text-center ">
                <div className="card-header">Account Information</div>
                <div className="card-body">
                    <h5 className="card-title">{this.state.account.data.accountOwner }</h5>
                    <p className="card-text">created date : {this.state.account.data.creationDate} .</p>
                    <span className="h6"> {this.state.account.data.balance} DH</span>
                </div>
                <div className="card-footer text-muted">  </div>
            </div>
        ):(
            <div className="col-12 m-5 ">
                <h6 className="bg-dangers">Error while extracting data Please try again </h6>
            </div>
        );
         
        
        return(
            <div className="col-12 p-5">
                {accountInfo}
            </div>
        )
    }

} 