import React from 'react'
import { Link } from 'react-router-dom';

const TableData = (props) => {
  return (
    <div>
       <div className={"overflow"}>
      <table className={props.isLightModeOn?"table-light":""}>
            <tr className={props.isLightModeOn?"toprow-light":"toprow"}>
            <td className={props.isLightModeOn?"siderow-light":"siderow"}>Id</td>
            <td>Name</td>
            <td>E-Mail</td>
            <td>Password</td>
            <td>Mobile-No</td>
            <td>Address</td>
            <td>City</td>
            <td>Image</td>
            <td>Actions</td>

        </tr>
      
        {props.api.map((val, index) => {
        
            return (<tr key={index}>
            <td className={props.isLightModeOn?"siderow-light":"siderow"}>{val.id}</td>
            <td>{val.Name}</td>
            <td>{val.Email}</td>
            <td>{val.Password}</td>
            <td>{val.MobileNo}</td>
            <td>{val.Address}</td>
            <td>{val.City}</td>
            <td><img src={val.Image} height="50px" width="70px" alt="not found"></img></td>
            <td>
          <Link to="/Form" style={{ textDecoration: 'none' }}><button   
                      onClick={() => {
                    
                        props.editmode();
                        props.setname(val?.Name);
                        props.setemail(val?.Email);
                        props.setpassword(val?.Password);
                        props.setmobileno(val?.MobileNo);
                        props.setaddress(val?.Address);
                        props.setcity(val?.City);
                        props.setimage(val?.Image)
                        props.setid(val?.id);
                      }}
                    >
              
                      Edit
                    </button></Link>  
                    <button
                        onClick={() => {
                            props.deleteData(val.id, val);
                                                }}
                        >
                            {props.deleteId === val?.id}Delete
                        </button>
                        </td>
                        </tr>)})}
        
        
        
    
      </table>
      <div><Link to="/Form" style={{ textDecoration: 'none' }}><button className={props.isLightModeOn?"button1-light":"button1"}>Add More Data</button></Link></div>
    </div>
    </div>
   
  )
}

export default TableData;
