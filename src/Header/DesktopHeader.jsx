import React, { useState } from 'react'
import './desktopHeader.scss';
import Logo from '../assets/logo/logo.png';
import Toggle from '../assets/logo/menuToggle.png';
import { NavLink } from 'react-router-dom';

const DesktopHeader = () => {
 const[showMenu,setShowMenu] = useState(false);

  return (
    <div className ='container-fluid'> 
    <header className='desktop-header'>
      <div className='container'>
        <div className='header-wrapeer'>
         
          <div className='left-navigation'>
          <div className='mobile-toggle' >
            <img src={Toggle} alt=""  onClick={()=>{ setShowMenu(!showMenu)}}/>
          </div>
            <div className='logo' >
              <img src={Logo} />
            </div>
            <nav className={`navigation ${showMenu ? "showMobile_nav" :"" }`} >
               <div className='crossIcon'  onClick={()=>{ setShowMenu(!showMenu)}}>
                   X
               </div>

              <NavLink >
                InPlay
              </NavLink>
              <NavLink >
                Sports
              </NavLink>
              <NavLink >
                MultiMedia
              </NavLink>
              <NavLink >
                Accounts
              </NavLink>
             

            </nav>
          </div>

          <div className='right-navigation'>
            <div className='bnt-group'>
              <button className='login'>Login</button>
              <button className='register'>Register</button>
            </div>
          </div>


        </div>
      </div>
    </header>
    </div>
  )
}

export default DesktopHeader