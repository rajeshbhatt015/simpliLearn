import React from 'react'
import Lists from '../componets/Lists/Lists'
import MarqueElement from '../componets/MarqueElement/MarqueElement'
import PaymentMethod from '../componets/PaymentMethod/PaymentMethod'
import Slider from '../componets/Slider/Slider'
import { Sports } from '../componets/Sports/Sports'

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Lists />
      <MarqueElement />
      <Sports />
    </React.Fragment>
  )
}

export default HomePage