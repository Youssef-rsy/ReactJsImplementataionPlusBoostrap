import React from 'react';
import Delete  from "../images/delete.svg";
import Plus  from "../images/plus.svg";

import Remove  from "../images/remove.svg";
import DeletePromp from './DeleteAccount';
import CreditPromp from './CreditAccount';
import DebitPromp from './DebitAccount';
function App() {
  return (
    <div className="container row col-12 p-5">
    <table className="table col-12">
        <thead>
          <tr>
            <th scope="col-2">#</th>
            <th scope="col-2">FullName</th>
            <th scope="col-4">Balance</th>
            <th scope="col-4">Creation Date</th>
            <th scope="col-2">Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td >Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className="w-50">
             <a className=""> <img data-toggle="modal" data-target="#creditPromp" src={Plus} width="3%" /></a>
             <a className=""> <img data-toggle="modal" data-target="#debitPromp" src={Remove} width="3%" /></a>
             <a className=""> <img  data-toggle="modal" data-target="#deletePromp" src={Delete} width="3%" /></a>
             <a className=""> </a>
            </td>
          </tr>
          
        </tbody>
      </table>
      <DeletePromp/>
      <CreditPromp/>
      <DebitPromp/>
    </div>
  );
}

export default App;
