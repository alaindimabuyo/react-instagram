import "react-id-swiper/lib/styles/css/swiper.css";
import React from "react";
import Swiper from "react-id-swiper";

const CoverflowEffect = ({ carousel }) => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  // //map objects
  // console.log(
  //   Object.keys(carousel).map((item, i) => {
  //     return carousel[item].images.standard_resolution.url;
  //   })
  // );

  return (
    <Swiper {...params}>
      {Object.keys(carousel).map((item, i) => (
        <div className='swiper-slide' key={i}>
          <img src={carousel[item].images.standard_resolution.url} alt='' />
        </div>
      ))}
    </Swiper>
  );
};

export default CoverflowEffect;
