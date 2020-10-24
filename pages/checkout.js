import React from "react";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { parseCookies, setCookie } from 'nookies'
import CheckoutForm from "../components/checkout-form";



export const getServerSideProps = async (ctx) => {
    const stripe = new Stripe('sk_test_51HfCQbKalev6rGvBBX6I9TSerXOC1w0RKBoeEwE1JEgtyb4KhIB3DiJ6F4o4ahgsI8SHEjXDARqSOXdqfQoNXzUa00j0b8kC5j');
    let paymentIntent;
    const { paymentIntentId, sum } = await parseCookies(ctx);

    if (paymentIntentId) {
        paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        return {
            props: {
                paymentIntent
            }
        }
    }
    let sumCZK = sum * 100;
    paymentIntent = await stripe.paymentIntents.create({
        amount: sumCZK,
        currency: 'czk'
    });

    setCookie(ctx, 'paymentIntentId', paymentIntent.id);

    return {
        props: {
            paymentIntent
        }
    }
}


const CheckoutPage = (ctx) => {
    const stripePromise = loadStripe("pk_test_51HfCQbKalev6rGvBMHNaOtgfWfMUKJzkhs7TfmcQ5fjp5XyoeG2z97erNGBrtWPLnv3QmN1ImHhkNzX0fgX9lLKQ00ogCnUjLE");
    const { sum } = parseCookies(ctx);
    return (
        <div className='checkout-page'>
            <Elements stripe={stripePromise}>
                <CheckoutForm sum={sum} />
            </Elements>
        </div>

    )
}

export default CheckoutPage;