import React from 'react'

import { Link } from 'react-router-dom'

const MainPage = (props) => {
  return (
    <div className='overflow2'>
  
     <Link to="/Form" style={{ textDecoration: 'none' }}><button className={props.isLightModeOn?"button1-light":"button1"} style={{ marginTop:"50px"}}>Add Data</button></Link>
     <Link to="/Table" style={{ textDecoration: 'none' }}><button className={props.isLightModeOn?"button1-light":"button1"} style={{ marginTop:"50px"}}>Show Table</button></Link>
      </div>
    
  )
}

export default MainPage;
