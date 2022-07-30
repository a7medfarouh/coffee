import React from 'react'

export  function Navbar() {
  return <>
  
  <nav className="navbar navbar-expand-lg bg-light p-3">
  <div className="container">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex ms-auto" role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-warning text-white" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center ">
       
        <li className="nav-item mx-2">
          <a className="nav-link text-warning fs-4" href="#">login</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link bg-warning text-white p-3 rounded-2" href="#">join for free <i className="fa-solid fa-right-long"></i></a>
        </li>
       
        
      </ul>
    </div>
  </div>
  </nav>
  </>
}
