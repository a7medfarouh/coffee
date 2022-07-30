import React from 'react'
import './About.css';
import logo from "../images/image.png"
export function About() {
  return <>
  <div className="container m-container">
    <div className="row">


      <div className="col-md-6">
        <div className="img-side">
          <img src={logo} alt="aboutlogo"  />
        </div>
        
      </div>
      <div className="offset-1 col-md-5 d-flex align-items-center">
      <div className="text-side ">
          <p className='fs-1 fw-bolder p-about '>make your <br/> own coffee </p>
        </div>
      </div>
    </div>

  
  </div>
  
  
  </>
}
