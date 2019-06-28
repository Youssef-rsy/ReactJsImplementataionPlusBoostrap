import React , {Component} from "react";
import AccountService from "../service/AccountService";
import  ListAcount from "./ListAccount"
export default class AddAccount extends Component{
  
    state = {
        accountOwner:null,
        balance:null,
        creationDate:null,
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        var date = new Date(this.state.creationDate);
        const creationDate = date.toISOString();
        this.state.creationDate = creationDate
        AccountService.post("/",this.state)
        .then((response)=>{
            console.dir(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        return (
             <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New Account</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="accountOwner">User Fullname</label>
                                    <input type="text" className="form-control" neme="accountOwner" id="accountOwner" placeholder="Example input" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="balance">Balance</label>
                                    <input type="text" className="form-control" name="balance" id="balance" placeholder="Another input" onChange={this.handleChange} />
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="creationDate" className="col-form-label">Creation Date</label>
                                    <input className="form-control" type="date" defaultValue="2019-06-04" name="creationDate" id="creationDate" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-dismiss="modal">Save </button>
                            </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}