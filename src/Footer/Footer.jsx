import React from 'react';
import './footer.scss';
import Logo from '../assets/logo/logo.png'


const Footer = () => {
  return (
    <div className ='container-fluid'> 
    <footer className='footer'>
      <div className='container'>
        <div className='footer-wrapper'>
        <img src={Logo} alt="logo" />
         <p>© 2023 logo Copyrights. All Rights Reserved</p>
        </div>
         
      </div>  
    </footer>
    </div>
  )
}

export default Footer