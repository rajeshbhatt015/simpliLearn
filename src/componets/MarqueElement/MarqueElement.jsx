import React from 'react';
import './marque.scss';
import Bell from "../../assets/images/bell.png";

const MarqueElement = () => {
    return (
        <section className='marque'>
            <div className='container-fluid'>
                <div className='marque-wrapper'>
                <div className='left-wrapper'>
                    <img src={Bell} alt="" />
                </div>
                <div className='right-wrapper'>
                    <marquee class="html-marquee" direction="left" behavior="scroll" scrollamount="12">
                        <p>Dear customer, if you have trouble visiting our site , please visit xyz.com, </p>
                    </marquee>
                </div>
                </div>
            </div>
        </section>
    )
}

export default MarqueElement