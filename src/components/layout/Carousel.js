import "react-id-swiper/lib/styles/css/swiper.css";
import React from "react";
import Swiper from "react-id-swiper";

const CoverflowEffect = ({ carousel }) => {
  const params = {
    effect: "cube",
    loop: true,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    }
  };

  console.log(carousel);

  return (
    <Swiper {...params}>
      <div className='container'>
        <div className='row'>
          <div className='col s6'>
            <div className='swiper-slide'>
              <img src={carousel.x_0_images_standard_resolution_url} alt='' />
            </div>
            <div className='swiper-slide'>
              <img src={carousel.x_1_images_standard_resolution_url} alt='' />
            </div>
            <div className='swiper-slide'>
              <img src={carousel.x_2_images_standard_resolution_url} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default CoverflowEffect;
