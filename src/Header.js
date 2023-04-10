import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    
  return (
    <div>
      <div className={props.isLightModeOn ? "up-light" : "up"}>
        <header className={props.isLightModeOn ? "header-light" : ""}>
          React Crud
          <span>
            <Link to="/Form" style={{ textDecoration: "none", color:props.isLightModeOn?"black":"rgb(248, 92, 20)"}}>
              Form
            </Link>
          </span>
          <span>
            <Link
              to="/Table"
              style={{ textDecoration: "none", color:props.isLightModeOn?"black":"rgb(248, 92, 20)"}}
            >
              Table
            </Link>
          </span>
        </header>
        <button onClick={props.handleLightmode}>
          <img
            src={props.isLightModeOn ? props.pic2 : props.pic}
            alt="darkmode"
          />
        </button>
      </div>
    </div>
  );
}

export default Header
