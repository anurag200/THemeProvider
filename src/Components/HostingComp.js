import React from 'react'

const HostingComp = (props) => {
  return (
    <>
      <div className="col-md-5  col-lg-12 col-12 text-center p-3 border mx-auto mt-5 hostinghover">
        <div className="row align-items-center ">
          <div className="col-md-12 col-lg-3 hosting_img">
            <img src={props.imgfile.default} alt="" className="img-fluid" />
          </div>
          <div className="col-md-12 col-lg-3 hosting_details">
            <p>Starting at</p>
            <h5 className="m-0">$2.75/month</h5>
            <h6 className="text-danger m-0"> Free domain for a year</h6>
            <p>Support: 24/7 phone and chat</p>
            <p>free SSL Certificate</p>
            <p> 45 Day Money Back Guarantee</p>
            <p> Easy WordPress Installs</p>
          </div>
          <div className="col-md-12 col-lg-3 hosting_rating ">
            <div className="star_rating">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>5.0</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="row hosting_button">
              <div className="col-md-6 col-lg-12 mt-2">
                <button className=" btn btn-danger">
                  <span>
                    <i className="fas fa-check-circle mr-2"></i>
                  </span>{' '}
                  Visit Now
                </button>
              </div>
              <div className="col-md-6 col-lg-12">
                <button className=" btn btn-dark mt-2">
                  <span>
                    <i className="fas fa-arrow-circle-right mr-2"></i>
                  </span>{' '}
                  Read Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HostingComp
