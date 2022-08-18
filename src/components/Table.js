import { Fragment } from "react";
import JsonData from "./data.json";


function Table() {
  
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.age}</td>
        <td>{info.address}</td>
        <td>{info.date}</td>
        <td>{info.email}</td>
      </tr>
    );
  });
    return ( <Fragment>
        {DisplayData}
    </Fragment>)

}
export default Table;