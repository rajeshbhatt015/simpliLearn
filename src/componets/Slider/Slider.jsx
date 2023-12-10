import React, { useEffect } from 'react'
import SliderImg from '../../assets/images/slider.png';
import './slider.scss';



import { Pagination } from 'swiper/modules';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
// import required modules



const Slider = () => {
    // new Swiper('.swiper', {
    //     slidesPerView: 3,
    //     grid: {
    //       rows: 3,
    //     },
    //     mousewheel: {
    //       forceToAxis: true,
    //     },
    //   });
   
    




   
    return (
        <>
            <div className='container-fluid '>
                <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="3"
                    space-between="30" free-mode="false" loop="true" centered-slides="true"  autoplay-delay="2500" autoplay-disable-on-interaction="false" >

                    <swiper-slide >
                        <img src={'https://img.freepik.com/free-vector/bingo-lottery-winner-poster-realistic-style-with-balls-coins-sparkling-blue-background-vector-illustration_1284-83632.jpg?w=2000&t=st=1702134300~exp=1702134900~hmac=91fcea0d3491a4b0f02db8e3d74c57f6ba116eabf61f86749c1619cfb259061c'} />
                    </swiper-slide>
                    <swiper-slide>
                        <img src={SliderImg} />
                    </swiper-slide>
                    <swiper-slide>
                        <img src={SliderImg} />
                    </swiper-slide>
                    <swiper-slide>
                        <img src={SliderImg} />
                    </swiper-slide>
                </swiper-container>
            </div>
        </>
    )
}


export default Slider