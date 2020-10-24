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


const SliderSticky = () =>{

    const settings = {
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
return(
    <div className="w-slider-mask slider-mask-sticky">
    <style jsx>
            {` 
                .w-slide.w-slide-sticky{
                    height: 300px;
                }
                .w-slider-mask {
                  width: 100%;
                }
                .slider-mask-sticky{
                  border-radius: 10px;
                }
            `}
      </style>
        <Slick {...settings}>
            <div className="af-class-slide af-class-slide-1 w-slide w-slide-sticky" ></div>
            <div className="af-class-slide af-class-slide-2 w-slide w-slide-sticky" ></div>
            <div className="af-class-slide af-class-slide-3 w-slide w-slide-sticky" ></div>
            <div className="af-class-slide af-class-slide-4 w-slide w-slide-sticky" ></div>
            <div className="af-class-slide af-class-slide-5 w-slide w-slide-sticky" ></div>
        </Slick>
    </div>
)

}

export default SliderSticky;
