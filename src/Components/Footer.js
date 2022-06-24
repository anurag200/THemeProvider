import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-xl">
                <div className="footer">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-7 col-12 mt-3">
                            <p>© Copyright 2020 Top10themeproviders.com.</p>
                        </div>
                        <div className="col-md-5 col-lg-5 col-12 mt-3">
                            <nav>
                                <ul>
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Disclaimer</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Blog</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
