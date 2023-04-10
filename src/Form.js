import React from 'react'
import { Link } from 'react-router-dom';

const Form = (props) => {
  return (
    <div>
       <div className="main-div">
        <form className={props.isLightModeOn ? "form-light" : ""}>
          <input
            className={props.isLightModeOn ? "input-light" : ""}
            type="text"
            placeholder="Enter Your Name"
            value={props.name}
            onChange={(e) => props.setname(e.target.value)}
          ></input>
          <input
            className={props.isLightModeOn ? "input-light" : ""}
            type="text"
            placeholder="Enter Your E-Mail"
            value={props.email}
            onChange={(e) => props.setemail(e.target.value)}
          ></input>
          <input
            className={props.isLightModeOn ? "input-light" : ""}
            type="text"
            placeholder="Enter Your Password"
            value={props.password}
            onChange={(e) => props.setpassword(e.target.value)}
          ></input>
          <input
            className={props.isLightModeOn ? "input-light" : ""}
            type="text"
            placeholder="Enter Your Mobile-No."
            value={props.mobileno}
            onChange={(e) => props.setmobileno(e.target.value)}
          ></input>
          <input
            className={props.isLightModeOn ? "input-light" : ""}
            type="text"
            placeholder="Enter Your Address"
            value={props.address}
            onChange={(e) => props.setaddress(e.target.value)}
          ></input>
          <input
            className={props.isLightModeOn ? "input-light" : ""}
            type="text"
            placeholder="Enter Your City"
            value={props.city}
            onChange={(e) => props.setcity(e.target.value)}
          ></input>
          <input
            className={props.isLightModeOn ? "input-light" : ""}
            type="text"
            placeholder="Enter Your Image"
            value={props.image}
            onChange={(e) => props.setimage(e.target.value)}
          ></input>
        </form>
       <Link to="/table" style={{ textDecoration: 'none' }}><button
          className={props.isLightModeOn ? "button1-light" : "button1"}
          onClick={() => {
            if (props.editmodeon) {
              props.dataUpdate();
            } else {
              props.dataInsert();
            }
            props.seteditmodeon(false);
          }}
        >
          {props.editmodeon ? "Edit Data" : "Add Data"}
        </button></Link> 
      </div>
    </div>
  )
}

export default Form
