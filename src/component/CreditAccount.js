import React ,{Component} from "react";

export default class CreditPromp extends Component {

      state={
        newAmount:null
      }  

    changedAmount =(e)=>{
      this.setState({
        newAmount:e.target.value
      })
    }

    SaveChnge=(e)=>{
      e.preventDefault()
      console.log(this.props.accountId );
      console.log(this.state  );
    }
    render(){
        return (
          <div className="modal fade" id="creditPromp" tabIndex={-1} role="dialog" aria-labelledby="deletePromp" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Please enter the amount that you would add to your account</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={this.SaveChnge}>
              <div className="modal-body">
            
                  <div className="form-group">
                      <label htmlFor="formGroupExampleInput">Amount</label>
                      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Amount" name="newAmout" onChange={this.changedAmount}/>
                  </div>
              
              </div>
              <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-success" >Save</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
   }
}