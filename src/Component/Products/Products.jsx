import React from 'react'
import './Products.css';
import img1 from "../images/image1.png"
import img2 from "../images/image2.png"
import img3 from "../images/image3.png"
import img4 from "../images/image4.png"
export  function Products() {
  return <>
   
  <div className="container m-products">
    <h5 className='text-primary'>practive advice</h5>
    <h2 className='fs-1 fw-bolder'>Coffee Products</h2>
    <div className="row m-row ">
       
        <div className="col-md-3">
            <div className="products-content">
                <img src={img1} alt="image1" className='img' />
                <div className="products-title mt-2">
                    <p className='fs-3 fw-bolder'>Coffee</p>
                    <p className='fs-5 fw-bolder'><i className="fa-solid fa-star text-warning "></i> 4.4  <span className='text-muted'>429 Reviews</span></p>
                    <p className='fs-5 fw-bolder'>New cario,Egypt</p>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="products-content">
                <img src={img2} alt="image2" className='img' />
                <div className="products-title mt-2">
                    <p className='fs-3 fw-bolder'>Coffee</p>
                    <p className='fs-5 fw-bolder'><i className="fa-solid fa-star text-warning "></i> 4.4  <span className='text-muted'>429 Reviews</span></p>
                    <p className='fs-5 fw-bolder'>New cario,Egypt</p>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="products-content">
                <img src={img3} alt="image3" className='img' />
                <div className="products-title mt-2">
                    <p className='fs-3 fw-bolder'>Coffee</p>
                    <p className='fs-5 fw-bolder'><i className="fa-solid fa-star text-warning "></i> 4.4  <span className='text-muted'>429 Reviews</span></p>
                    <p className='fs-5 fw-bolder'>New cario,Egypt</p>
                </div>    
            </div>
        </div>
        <div className="col-md-3">
            <div className="products-content">
                <img src={img4} alt="image4" className='img' />
                <div className="products-title mt-2">
                    <p className='fs-3 fw-bolder'>Coffee</p>
                    <p className='fs-5 fw-bolder'><i className="fa-solid fa-star text-warning "></i> 4.4  <span className='text-muted'>429 Reviews</span></p>
                    <p className='fs-5 fw-bolder'>New cario,Egypt</p>
                </div>    
            </div>
        </div>
    </div>
  </div>
  
  
  
  
  </>
}
