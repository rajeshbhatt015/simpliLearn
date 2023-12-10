import React from 'react'
import './lists.scss';
import ImagePic from '../../assets/images/casino-white.png';
import Cricket from '../../assets/images/cricket.png';
import Soccer from '../../assets/images/soccer.png';
import Tennis from '../../assets/images/tennis.png';
import Slot from '../../assets/images/slot.png';
import Fishing from '../../assets/images/fish.png';

const Lists = () => {
  return (
    <div className ='container-fluid'> 
    <section className='lists-wrapper'>
    <div className='container'>
          <div className='lists-wrap'>
            <div className='img-wrap'>
                <img src={ImagePic} alt="" />
                <p>Casino</p>
            </div>
            <div className='img-wrap'>
                <img src={Cricket} alt="" />
                <p>Cricket</p>
            </div>
            <div className='img-wrap'>
                <img src={Soccer} alt="" />
                <p>Soccer</p>
            </div>
            <div className='img-wrap'>
                <img src={Tennis} alt="" />
                <p>Tennis</p>
            </div>
            <div className='img-wrap'>
                <img src={Slot} alt="" />
                <p>Slot</p>
            </div>
            <div className='img-wrap'>
                <img src={Fishing} alt="" />
                <p>Fishing</p>
            </div>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Lists