import React from 'react'
import './Contact.css';
export  function Contact() {
  return <>
  <div className='container m-contact' >
    <h2 className='text-center'>JOIN US</h2>
    <div className="row">
      <div className="col-md-8 m-auto">
      <form className="d-flex " role="search">
        <input className="form-control text-dark" type="email" placeholder="Your Email" aria-label="Search"/>
        <button className="btn btn-warning text-white" type="submit"> Subscribe </button>
      </form>
      </div>
    </div>

  </div>
  
  </>
}
