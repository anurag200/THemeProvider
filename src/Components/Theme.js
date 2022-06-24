import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { primtheme } from './Themedata'

const Theme = (props) => {
  return (
    <>
      <div className="theme premium">
        <div className="container-xl ">
          <h3 className="py-4">{props.cat} Themes</h3>
        </div>
        <div className="themess">
          <div className="container-xl">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-9">
                {primtheme.map((cur, index) => {
                  if (cur.type === props.cat) {
                    return (
                      <div className="row mb-5" key={index}>
                        <div className="col-md-5 col-lg-5 mt-3 col-12 col-sm-5">
                          <div className="themesimg">
                            <img
                              src={cur.img.default}
                              alt=""
                              className="img-fluid"
                            />
                            <div className="price shadow">
                              <h2>${cur.price}</h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-7 col-12">
                          <div className="Card_text p-2">
                            <p className="m-0 mt-3 font-weight-bold">
                              {cur.heading}
                            </p>
                            <div className="comn">
                              <span>
                                <i className="far fa-clock"></i>
                              </span>
                              <span className="date">{'may 1,2021'}</span>
                              <span className="comment">
                                <i className="far fa-comment"></i> 0
                              </span>
                              <span className="eye">
                                <i className="far fa-eye"></i>1808
                              </span>
                            </div>
                            <p className="details mb-0">{cur.para}</p>
                            <div className="row mt-2">
                              <div className="col-sm-10 col-8 col-md-8 mt-2 col-lg-6 p-0">
                                <button className="btn btn-primary w-100 infobtn">
                                  <span>
                                    <i className="fas fa-shopping-cart"></i>
                                  </span>{' '}
                                  More Info / Download
                                </button>
                              </div>
                              <div className="col-sm-4 col-4 col-md-4 mt-2 col-lg-3">
                                <button className="btn btn-warning text-light w-100 px-0 demobtnn">
                                  <span>
                                    <i className="fas fa-desktop"></i>
                                  </span>{' '}
                                  Demo
                                </button>
                              </div>
                              <div className="col-sm-2 p-0 col-md-2 mt-2 col-lg-2 col-2">
                                <button className="btn btn-danger w-100 blogdetails">
                                  Detail
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
              <div className="col-md-12 p-0 col-lg-3">
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

export default Theme
