import React from "react";

export default function DebitPromp(){

  return (
    <div className="modal fade" id="debitPromp" tabIndex={-1} role="dialog" aria-labelledby="deletePromp" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Please enter the amount that you would retrieve</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput">Amount</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Amount" />
          </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-success">Save</button>
      </div>
    </div>
  </div>
</div>
)
}