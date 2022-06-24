import React from 'react'
import HostingComp from './HostingComp'
import Footer from './Footer'

const Hosting = () => {
  return (
    <>
      <div className="hosting">
        <div className="container-xl">
          <h3 className="py-4">Top 10 Wordpress Hosting Providers</h3>
        </div>
        <div className="hostt px-4">
          <div className="container-xl">
            <div className="row mt-4 py-4">
              <HostingComp
                imgfile={require('../Components/img/hosting/hostinger.png')}
              />
              <HostingComp
                imgfile={require('../Components/img/hosting/a2hosting.png')}
              />
              <HostingComp
                imgfile={require('../Components/img/hosting/bluehost.png')}
              />
              <HostingComp
                imgfile={require('../Components/img/hosting/dreamhost.png')}
              />
              <HostingComp
                imgfile={require('../Components/img/hosting/evds.png')}
              />
              <HostingComp
                imgfile={require('../Components/img/hosting/greengreeks.png')}
              />
              <HostingComp
                imgfile={require('../Components/img/hosting/hostwinds.png')}
              />
              <HostingComp
                imgfile={require('../Components/img/hosting/ipage.png')}
              />
              <HostingComp
                imgfile={require('../Components/img/hosting/namecheap.png')}
              />
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

export default Hosting
