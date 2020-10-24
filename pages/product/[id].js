import { useRouter } from "next/router";
import $ from 'jquery'
import React, { useState } from 'react';
import SliderProduct from '../../components/sliders/slider-product.js'
import axios from 'axios';
import RichText from '../../components/richText'
import NumericInput from 'react-numeric-input';
import ReactLoading from 'react-loading';


export default () => {

  const router = useRouter();

  const [state, setState] = useState({
    data: null,
    amount: 1
  });

  const getData = async (id) => {
    let res = await axios.get('http://localhost:1337/products?slug=' + id);
    setState({ ...state, data: res.data[0] });
  }

  if (router.query.id && !state.data) {
    getData(router.query.id);
  }

  const addToCart = (id) => {
    $('.af-class-btn').toggleClass('active');
    $('.cart-btn-text-1').fadeToggle(0);
    $('.cart-btn-text-2').fadeToggle(0);
    let amount = state.amount;
    let products = [];
    let unic = true;
    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'));
      console.log(products)
    }
    if (products.length) {
      products.forEach(el => {
        console.log(products);
        if (el.id == id) {
          el.amount += amount;
          unic = false;
        }
      })
    }
    if (unic) products.push({ 'id': id, 'amount': amount, 'name': state.data.Name, 'image': state.data.Images[0].url, 'price': state.data.Price });
    localStorage.setItem('products', JSON.stringify(products));
  }

  const amountChange = (num) => {
    setState({ ...state, amount: num });
  }


  if (state.data) {
    console.log(state.data)
    return (
      <>
        <div className="af-class-section">
          <div className="af-class-wrap">
            <div className="af-class-_6-col">
              <div data-animation="slide" className="af-class-slider-2 af-class-ecommerce w-slider product-slider">
                <SliderProduct img={state.data.Images} />
              </div>
            </div>
            <div className="af-class-_6-col af-class-_6-col-last">
              <div className="af-class-products1-content-wrap">
                <div className="af-class-products1-desc-wrap">
                  <h3>{state.data.Name}<br /></h3>
                  <p className="af-class-text-16 af-class-text-16-60">{state.data.Features}</p>
                </div>
                <div className="af-class-products1-price-wrap">
                  <h2 className="af-class-products1-price-headline">{state.amount * state.data.Price} Kč<br /></h2>
                  <NumericInput onChange={(num) => amountChange(num)} className='numeric-input' min={1} max={10} value={state.amount} />
                </div>
                <div onClick={() => addToCart(state.data.slug)} className="af-class-products1-actions-wrap">
                  <a href="#" className="af-class-btn w-button">

                    <div className='cart-btn-text-1'>
                      Přidat do košíku
                    </div>
                    <div className='cart-btn-text-2'>
                      Odebrat z košíku
                    </div>
                  </a>
                </div>
                <div className="af-class-products1-details-wrap">
                  <p className="af-class-text-14 af-class-text-14-60">
                    <RichText data={state.data.Description} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (<div className="loading-screen" > <div className='loading-element'><ReactLoading type={'bubbles'} color="#ff373a" /></div></div>)

  }
};