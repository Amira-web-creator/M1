import React from "react";
import Table from "./Table";
function JsonDataDisplay(props) {



  return (
    <div>
      <table className="table center">
        <thead>
          <tr>
            <th>key</th>
            <th>Name</th>
            <th>Age</th>
            <th>Adress</th>
            <th>Date</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <Table/>
        </tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
