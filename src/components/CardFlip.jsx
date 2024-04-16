import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css';
import adv_img1 from "../img/profile-image_2dba87d4de7243bda1700ab1569fc7be_1682641606-384x384.jpg";
import adv_img2 from "../img/profile-image_ee03e40da1945c0fb4367ae4fe7069f2_1682643652-384x384.jpg";
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Flip() {
  return (
   
    
      <Swiper
        effect={'flip'}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
            <SwiperSlide>
                <img src={adv_img1} alt="Advogado"/>
          
            </SwiperSlide>
    
            <SwiperSlide>
                <img src={adv_img2} alt="Advogada"/>
             
            </SwiperSlide>
      </Swiper>
  );
}

export default Flip;