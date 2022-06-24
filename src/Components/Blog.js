import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Blogdata } from './Themedata'

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container-xl">
          <h3 className="py-4">Blog</h3>
        </div>
        <div className="blogcard">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-9 col-12">
                <div className="row">
                  {Blogdata.map((cur, ind) => {
                    return (
                      <>
                        <div className="col-sm-5 col-12 mt-5">
                          <img
                            src={cur.img.default}
                            className="img-fluid rounded"
                            alt="#"
                          />
                        </div>
                        <div className="col-sm-7 col-12 mt-5">
                          <Link to="#" className="h5 text-dark">
                            {cur.heading}
                          </Link>
                          <div className="comn">
                            <span>
                              <i className="far fa-clock"></i>
                            </span>
                            <span className="date">{cur.date}</span>
                            <span className="comment">
                              <i className="far fa-comment"></i> 0
                            </span>
                            <span className="eye">
                              <i className="far fa-eye"></i>1808
                            </span>
                          </div>
                          <div className="details">{cur.details}</div>
                          <div className="blogbtn">
                            <button className="btn btn-warning mt-3 blogdetails">
                              Details
                            </button>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>
              <div className="col-md-3 col-12 p-0 ">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-5">
        <Footer />
      </div>
    </>
  )
}

export default Blog
