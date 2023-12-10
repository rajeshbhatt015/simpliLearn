import React from 'react'
import './payment.scss';
import UpiImg from "../../assets/images/upi.png";
import Pay from "../../assets/images/pay.png";
import Bank from "../../assets/images/bank.png";
import PayTm from "../../assets/images/paytm.png";
import UST from "../../assets/images/ust.png";


import Gameimg from "../../assets/images/gaming.png"

const PaymentMethod = () => {
  return (
    <section className='payment-method'>
        <div className='container'>
              <div className='topHeading'>
                   <h3>Payment Method</h3>


              </div>

              <div className='image-wrap'>
                  <img src={UpiImg} alt="" />
                  <img src={Pay} alt="" />
                  <img src={Bank} alt="" />
                  <img src={PayTm} alt="" />
                  <img src={UST} alt="" />
              </div>

              <div className='bottom-heading'>
                <h3>Gaming Licensed</h3>
                <div className='img-wrap'>
                <img src={Gameimg} alt="" />
                </div>
              </div>
        </div>
    </section>
  )
}

export default PaymentMethod