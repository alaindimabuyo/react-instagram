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
      {carousel.x_0_type === "image" ? (
        <div className='swiper-slide'>
          <img src={carousel.x_0_images_standard_resolution_url} alt='' />
        </div>
      ) : (
        false
      )}
      {carousel.x_1_type === "image" ? (
        <div className='swiper-slide'>
          <img src={carousel.x_1_images_standard_resolution_url} alt='' />
        </div>
      ) : (
        false
      )}
      {carousel.x_2_type === "image" ? (
        <div className='swiper-slide'>
          <img src={carousel.x_2_images_standard_resolution_url} alt='' />
        </div>
      ) : (
        <div className='swiper-slide noSwiping	'>
          <img src={carousel.x_0_images_standard_resolution_url} alt='' />
        </div>
      )}
      {carousel.x_3_type === "image" ? (
        <div className='swiper-slide'>
          <img src={carousel.x_3_images_standard_resolution_url} alt='' />
        </div>
      ) : (
        <div className='swiper-slide noSwiping	'>
          <img src={carousel.x_0_images_standard_resolution_url} alt='' />
        </div>
      )}
      {carousel.x_4_type === "image" ? (
        <div className='swiper-slide'>
          <img src={carousel.x_4_images_standard_resolution_url} alt='' />
        </div>
      ) : (
        <div className='swiper-slide noSwiping	'>
          <img src={carousel.x_1_images_standard_resolution_url} alt='' />
        </div>
      )}

      {/* 

      <div className='swiper-slide'>
        <img src={carousel.x_0_images_standard_resolution_url} alt='' />
      </div>
      <div className='swiper-slide'>
        <img src={carousel.x_1_images_standard_resolution_url} alt='' />
      </div>
      <div className='swiper-slide'>
        <img src={carousel.x_2_images_standard_resolution_url} alt='' />
      </div>
      <div className='swiper-slide'>
        <img src={carousel.x_3_images_standard_resolution_url} alt='' />
      </div>
      <div className='swiper-slide'>
        <img src={carousel.x_4_images_standard_resolution_url} alt='' />
      </div>
      <div className='swiper-slide'>
        <img src={carousel.x_5_images_standard_resolution_url} alt='' />
      </div>
      <div className='swiper-slide'>
        <img src={carousel.x_6_images_standard_resolution_url} alt='' />
      </div>
      <div className='swiper-slide'>
        <img src={carousel.x_7_images_standard_resolution_url} alt='' />
      </div>
      <div className='swiper-slide'>
        <img src={carousel.x_8_images_standard_resolution_url} alt='' />
      </div> */}
    </Swiper>
  );
};

export default CoverflowEffect;
