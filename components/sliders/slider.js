import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import dynamic from "next/dynamic";

const Slick = dynamic(
  () => {
    return import("react-slick");
  },
  { ssr: false }
);


const Slider = () =>{

    const settings = {
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
return(
    <div className="w-slider-mask">
    <style jsx>
            {` 
                .w-slide{
                    height: 500px;
                }
                .w-slider-mask {
                  width: 100%;
                }
            `}
      </style>
        <Slick {...settings}>
            <div className="af-class-slide af-class-slide-1 w-slide" ></div>
            <div className="af-class-slide af-class-slide-2 w-slide" ></div>
            <div className="af-class-slide af-class-slide-3 w-slide" ></div>
            <div className="af-class-slide af-class-slide-4 w-slide" ></div>
            <div className="af-class-slide af-class-slide-5 w-slide" ></div>
        </Slick>
    </div>
)

}

export default Slider;
