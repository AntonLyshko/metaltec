import React, { useState } from "react";
import { parseCookies, destroyCookie } from "nookies";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios';

const CheckoutForm = (props, ctx) => {
    const [checkoutError, setCheckoutError] = useState();
    const [checkoutSuccess, setCheckoutSuccess] = useState();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setCheckoutError(error.message);
        } else {
            setCheckoutSuccess(true);
            destroyCookie(null, "paymentIntentId");
            destroyCookie(null, "sum");
            await createOrder();
        }
    };


    const createOrder = async () => {
        let rawOrder = await localStorage.getItem('order');
        let order = await JSON.parse(rawOrder);
        console.log(order)
        await axios
            .post('http://localhost:1337/orders', order)
            .then(response => {
                console.log('Order: ', response.data);
                sendCheck(response.data.id);
                localStorage.removeItem("products")
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
    }

    const sendCheck = (id) => {
        console.log('Sending order info: ' + id)
        axios.get('http://localhost:5000/api/invoice/' + id);
     }

    const CARD_OPTIONS = {
        iconStyle: 'solid',
        style: {
            base: {
                border: '1px solid #ddd',
                iconColor: '#ff1721',
                color: '#111',
                fontSize: '18px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': { color: '#ff1721' },
                '::placeholder': { color: '#111' },
            },
            invalid: {
                iconColor: '#ffc7ee',
                color: '#ffc7ee',
            },
        },
    };

    if (checkoutSuccess) return (
        <div className='payment-success'>
            <img width='72' height='72' src={require("../images/check.svg")} />
            <h3>Platba byla úspěšná</h3>
            <p>Kontrola a podrobnosti o nákupu byly zaslány na poštu, kterou jste zadali</p>
        </div>
) ;

    return (
        <form onSubmit={handleSubmit}>
            <h4 className='final-sum'>Platit {props.sum} Kč</h4>
            <div className='card-element-container'>
                <CardElement options={CARD_OPTIONS} />
            </div>
            <button type="submit" className='final-btn-container af-class-button-2 af-class-order-btn-1 w-button continue-btn final-btn' disabled={!stripe}>
             
                    Pay
                    
            </button>
            <div className='error-container' style={{ color: "red" }}>{checkoutError}</div>
        </form>
    );
};


export default CheckoutForm