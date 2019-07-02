import React  from "react";

//export default class DeletePromp extends Component {
    const DeletePromp =({deleteAccount , accountId})=>{
        return (
            <div className="modal fade" id="deletePromp" tabIndex={-1} role="dialog" aria-labelledby="deletePromp" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Are you sure that you wanna delete this account ?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>{deleteAccount(accountId)}} >Delete</button>
                </div>
            </div>
            </div>
        </div>
        )
}
export default  DeletePromp;