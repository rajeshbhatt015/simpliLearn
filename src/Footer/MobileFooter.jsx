import React from 'react';
import './mobileFooter.scss';
import Play from "../assets/images/play.png";
import Sports from "../assets/images/sports.png";
import Mutlimedia from "../assets/images/multimedia.png";
import Accounts from "../assets/images/accounts.png";
import HomeIcon  from "../assets/images/home.png";

const MobileFooter = () => {
  return (
    <div className='container-fluid'>
    <section className='mobile-footer'>
       <div className='container'>
           <div className='mobile-wrapper'>
              <div className='mobile-item'>
                <img src={Play} alt="" />
                 <p>IN PLAY</p>
              </div>
              <div className='mobile-item'>
                <img src={Sports} alt="" />
                 <p>SPORTS </p>
              </div>

              <div className='mobile-items home-icon'>
                <img src={HomeIcon} alt="" />
        
   
              </div>
              <div className='mobile-item'>
                <img src={Mutlimedia} alt="" />
                 <p>MULTI M.</p>
              </div>
              <div className='mobile-item'>
                <img src={Accounts} alt="" />
                 <p>ACCOUNT</p>
              </div>
           </div>
       </div>
    </section>
    </div>
  )
}

export default MobileFooter