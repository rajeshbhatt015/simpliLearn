import React from 'react';
import './sports.scss';
import Sportsimg from "../../assets/images/sport.png"

export const Sports = () => {
  return (
    <section className='sports-section'>

        <div className='container'>
        <h3 className='heading'>Sports</h3>
        </div>
        <div className='container-fluid'>
             

            <div className='sports-wrapper'>
                <div className='sports-wrap'>
                    <img src={Sportsimg}  alt="" />
                    <p>Abceefgh</p>
                </div>
                <div className='sports-wrap'>
                    <img src={Sportsimg}  alt="" />
                    <p>Abceefgh</p>
                </div>
                <div className='sports-wrap'>
                    <img src={Sportsimg}  alt="" />
                    <p>Abceefgh</p>
                </div>
                <div className='sports-wrap'>
                    <img src={Sportsimg}  alt="" />
                    <p>Abceefgh</p>
                </div>
                <div className='sports-wrap'>
                    <img src={Sportsimg}  alt="" />
                    <p>Abceefgh</p>
                </div>
                <div className='sports-wrap'>
                    <img src={Sportsimg}  alt="" />
                    <p>Abceefgh</p>
                </div>
                <div className='sports-wrap'>
                    <img src={Sportsimg}  alt="" />
                    <p>Abceefgh</p>
                </div>
                <div className='sports-wrap'>
                    <img src={Sportsimg}  alt="" />
                    <p>Abceefgh</p>
                </div>
            </div>
        </div>
    </section>
  )
}
