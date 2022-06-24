import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const [status, setStatus] = useState(false)
  const [navstaus, setNavStaus] = useState(false)
  return (
    <>
      <div className="wrap-1 shadow z4">
        <div className="container-xl navside">
          <div className="row py-3 align-items-center">
            <div className=" col-8 col-md-3">
              <Link to="/">
                <img
                  src={require('../Components/img/logo.png').default}
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="col-1 col-md-7">
              <nav className="mt-2">
                <ul className="drop">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/hosting">
                      Top 10 Wordpress Hosting Providers
                    </NavLink>
                  </li>
                  <li className="dropli">
                    <NavLink to="/theme">Premium Themes</NavLink>
                    <div className="dropdown shadow rounded py-3">
                      <ul>
                        <li>
                          <NavLink to="/category/Populartheme">
                            Popular Items{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Blog">
                            Blog / Magazine{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Entertainment">
                            Entertainment{' '}
                          </NavLink>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <NavLink to="/category/Real_Estate">
                            Real Estate{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Nonprofit">Nonprofit </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Corporate">Corporate </NavLink>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <NavLink to="/category/Creative">Creative </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Wedding">Wedding </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/BuddyPress">
                            BuddyPress{' '}
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-3 col-md-2 text-right">
              <span>
                <i className="fas fa-search"></i>
              </span>
              <button className="togglebtn" onClick={() => setStatus(true)}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
        {status ? (
          <div className="togglenav">
            <div className="toggleside">
              <button className="hidetoggle" onClick={() => setStatus(false)}>
                <i className="fas fa-times"></i>
              </button>
              <Link to="/" className="d-block mt-5">
                <img
                  src={require('../Components/img/logo.png').default}
                  alt=""
                />
              </Link>
              <ul className="sidenav">
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hosting">
                    Top 10 Wordpress Hosting Providers
                  </NavLink>
                </li>
                <li className="sideli" onClick={() => setNavStaus(!navstaus)}>
                  <NavLink to="/theme">Premium Themes</NavLink>
                  {navstaus ? (
                    <div className="dropside py-3">
                      <ul>
                        <li>
                          <NavLink to="/category/Populartheme">
                            Popular Items{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Blog">
                            Blog / Magazine{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Entertainment">
                            Entertainment{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Real_Estate">
                            Real Estate{' '}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Nonprofit">Nonprofit </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Corporate">Corporate </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Creative">Creative </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/Wedding">Wedding </NavLink>
                        </li>
                        <li>
                          <NavLink to="/category/BuddyPress">
                            BuddyPress{' '}
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Navbar
