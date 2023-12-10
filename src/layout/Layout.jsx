import React from 'react'
import { Outlet } from 'react-router'
import PaymentMethod from '../componets/PaymentMethod/PaymentMethod'
import Footer from '../Footer/Footer'
import MobileFooter from '../Footer/MobileFooter'
import DesktopHeader from '../Header/DesktopHeader'
import MobileHeader from '../Header/MobileHeader'

const Layout = () => {
  return (
     <React.Fragment>
        <>
          <DesktopHeader />
          {/* <MobileHeader /> */}
        </>
        <Outlet />
        <>
        <PaymentMethod />
        </>
        <>
           <Footer />
           <MobileFooter />
        </>



     </React.Fragment>
  )
}

export default Layout