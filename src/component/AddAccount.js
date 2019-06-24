import React from "react";
export default function AddAccount(){
  
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
            <div className="modal-body">
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">User Fullname</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Balance</label>
                    <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                </div>
                <div className="form-group ">
                    <label htmlFor="example-date-input" className="col-form-label">Creation Date</label>
                    <input className="form-control" type="date" defaultValue="2011-08-19" id="example-date-input" />
                </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save </button>
            </div>
          </div>
        </div>
      </div>
        )
}