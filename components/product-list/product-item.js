import Link from "next/link";
import React, {useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';



const ProductList = (props) => {
  let amount = props.amount || 9999;
  const [state, setState] = useState({
    data: null
  });

  async function fetchComment() {
    let res = await axios.get('http://localhost:1337/products/')
    console.log(res);
    setState({...state, data: res.data });
  }
  
  useEffect(() => {
    fetchComment();
  }, []);


  if (state.data) {

    return (
      <div>

        <style jsx>
          {` 
                .af-class-product-card{
                  margin-bottom: 20px;
                }
                .af-class-product-name-title{
                  padding-right: 0px;
                  font-size: 16px;
              }
              .af-class-product-card-image{
                height: 280px !important;
              }
                }
            `}
        </style>


        <div className="h-100">
          {state.data.map((item, index) => {
            
            if (index < amount) {
              let link = `/product/${item.slug}`
              if (props.category) {
                if (props.category == item.Category) {
                  return (
                    <div key={item.id} className="w-col w-col-3 w-col-medium-6 reveal-item">
                      <Link href={link}>
                        <div className="af-class-product-card">
                          <div className="af-class-product-card-image af-class-product-card-2"><img src={`http://localhost:1337${item.Images[0].url}`} loading="lazy" alt className="af-class-image-4" /></div>
                          <div className="af-class-product-card-description">
                            <div className="af-class-div-block-38">
                              <h3 className="af-class-product-name-title">{item.Name}<br /></h3>
                            </div>
                            <div className="af-class-price-wrapper">
                              <h2 className="af-class-product-price">{item.Price} Kč<br /></h2>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
              } else {
                return (
                  <div key={item.id} className="w-col w-col-3 w-col-medium-6 reveal-item">
                    <Link href={link}>
                      <div className="af-class-product-card">
                        <div className="af-class-product-card-image af-class-product-card-2 "><img src={`http://localhost:1337${item.Images[0].url}`} loading="lazy" alt className="af-class-image-4" /></div>
                        <div className="af-class-product-card-description">
                          <div className="af-class-div-block-38">
                            <h3 className="af-class-product-name-title">{item.Name}<br /></h3>
                          </div>
                          <div className="af-class-price-wrapper">
                            <h2 className="af-class-product-price">{item.Price} Kč<br /></h2>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              }

            }
          }

          )}
        </div>
      </div>
    );
  } else {
    return <div className="loading-screen" > <div className='loading-element'><ReactLoading type={'bubbles'} color="#ff373a"/></div></div>;
  }
}

export default ProductList;

