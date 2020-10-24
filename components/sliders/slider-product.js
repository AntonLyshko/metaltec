import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import dynamic from "next/dynamic";

const Slick = dynamic(
  () => {
    return import("react-slick");
  },
  { ssr: false }
);


const SliderProduct = (props) =>{

    const settings = {
        customPaging: function(i) {
          return (
            <a>
              ССылка
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        arrows: true,
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
                .product-slider-img{
                    height: 500px;
                    margin: 0 auto;
                    background: none;
                    border-radius: 10px;
                    box-shadow: 0 1px 4px 0 hsla(0, 0.00%, 0.00%, 0.29);
                }
                .product-slider{
                    background: none !important;
                }
                .w-slider{
                    background: none !important;
                }
                .w-slide-product{
                    text-align: center;
                }
            `}
      </style>
        <Slick {...settings}>
            {props.img.map((item)=>{
                console.log(item.url)
                return(
                    <div className='w-slide-product'>
                        <img  src={`http://localhost:1337${item.url}`} loading="lazy" alt className="product-slider-img" />
                    </div>
                )
            })}
        </Slick>
    </div>
)

}

export default SliderProduct;
