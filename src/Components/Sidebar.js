import React from 'react'
import { Link } from 'react-router-dom'
import { hostingdata, themeprovider } from './Themedata'

const Sidebar = () => {
  return (
    <>
      <div className="double_cirlcle my-4">
        <h5>Top 10 Themes Providers</h5>
      </div>
      {themeprovider.map((cur, ind) => {
        return (
          <div className="cards p-1 shadow-sm mt-2 overflow-hidden" key={ind}>
            <div className="row">
              <div className="col-2 col-md-4 col-lg-4">
                <img src={cur.img.default} className="img-fluid " alt="" />
              </div>
              <div className="col-6 col-md-4 p-0 col-lg-4 pl-2">
                <Link to="#">{cur.heading}</Link>
              </div>
              <div className="col-4 col-md-4 col-lg-4 text-right">
                <button className="btn btn-danger">Visit Now</button>
              </div>
            </div>
          </div>
        )
      })}
      <div className="double_cirlcle mt-5 mb-4">
        <h5>Top 10 Themes Providers</h5>
      </div>
      {hostingdata.map((cur, indx) => {
        return (
          <div className="cards p-1 shadow-sm mt-2 overflow-hidden" key={indx}>
            <div className="row">
              <div className="col-2 col-md-4 col-lg-4">
                <img src={cur.img.default} className="img-fluid " alt="" />
              </div>
              <div className="col-6 col-md-4 p-0 col-lg-4 pl-2">
                <Link to="#">{cur.heading}</Link>
              </div>
              <div className="col-4 col-md-4 col-lg-4 text-right">
                <button className="btn btn-danger">Visit Now</button>
              </div>
            </div>
          </div>
        )
      })}
      <div className="catnavsti">
        <div className="double_cirlcle mt-5 mb-4">
          <h5>Categories</h5>
        </div>
        <div className="catnav">
          <ul>
            <li>
              <Link to="#">
                Blog <span>(9)</span>{' '}
              </Link>
            </li>
            <li>
              <Link to="#">
                Blog / Magazine <span>(71)</span>{' '}
              </Link>
            </li>
            <li>
              <Link to="#">
                BuddyPress <span>(34)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Corporate <span>(22)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Creative <span>(35)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Directory & Listing <span>(37)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                eCommerce <span>(43)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Entertainment <span>(56)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Nonprofit <span>(20)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Popular Items <span>(29)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Premium Themes <span>(449)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Real Estate <span>(62)</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                Wedding <span>(30)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
