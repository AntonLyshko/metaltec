import Link from 'next/link'
import $ from 'jquery'
import React, { useEffect, useState, Fragment } from 'react';


const CartNav = (props) => {

    const [state, setState] = useState({
        data: [],
        sum: '(ツ)'
    });

    const getStorage = async () => {
        let cartItems = await localStorage.getItem('products');
        let dataStorage = await JSON.parse(cartItems);
        if(dataStorage){
            if (state.data.length != dataStorage.length) {
                let sum = 0;
                dataStorage.forEach(el => {
                    sum += parseInt(el.price, 10) * el.amount;
                });
                setState({ ...state, data: dataStorage, sum: sum })
            }
        }

    }

    useEffect(() => {
        getStorage();
    });

    const deleteProduct = async (id) => {
        await props.deleteProduct(id);
        getStorage();
    }


    const cartOpen = (num) => {
        $('.dropdown-' + num).show();
        getStorage();
    }

    const cartClose = () => {
        $('.w-dropdown-list').hide();
    }

    return (
        <div className="af-class-cart-container">

            <div data-hover={1} data-delay={0} className="af-class-dropdown w-dropdown">
                <Link href='/cart'>
                    <div onMouseEnter={() => cartOpen(4)} onMouseLeave={() => cartClose()} className="af-class-dropdown-toggle af-class-cart-toggle w-dropdown-toggle">
                        <img src={require("../../images/shopping-cart-empty-side-view.png")} loading="lazy" alt className="af-class-image-3" />
                    </div>
                </Link>
                <nav onMouseEnter={() => cartOpen(4)} onMouseLeave={() => cartClose()} className="af-class-navigation-dropdown af-class-dropdown-cart w-dropdown-list dropdown-4">
                    <div className="af-class-dropdown-pointer">
                        <div className="af-class-dropdown-wrapper">

                            {/* // */}

                            <Fragment>
                                {state.data.length ? (
                                    <Fragment>{
                                        state.data.map((item) => {
                                            return (
                                                <a href="#" className="af-class-dropdown-link af-class-dropdown-cart-item w-inline-block">
                                                    <div className="af-class-dropdown-cart-item">
                                                        <div className="af-class-dropdown-cart-amount">
                                                            <div>x{item.amount}</div>
                                                        </div>
                                                        <div className="af-class-dropdown-cart-img"><img src={`http://localhost:1337${item.image}`} loading="lazy" sizes="100vw" s alt className="af-class-image-7" /></div>
                                                        <div className="af-class-dropdown-cart-desc">
                                                            <h1 className="af-class-dropdown-cart-title">{item.name}</h1>
                                                            <div className="af-class-dropdown-cart-cost">{item.price} Kč</div>
                                                        </div>
                                                        <div onClick={() => deleteProduct(item.id)} className="af-class-dropdown-item-control"><img src={require("../../images/cross.png")} loading="lazy" alt className="af-class-image-8" /></div>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }</Fragment>
                                ) : (
                                        <Fragment>
                                            <div className='prazdni-kosik'>
                                                Košík prázdný
                        </div>

                                        </Fragment>
                                    )}
                            </Fragment>



                            {/* // */}

                            <div className="af-class-dropdown-cart-control">

                                <div className="af-class-sum-container">
                                    <h5 className="af-class-sum-title">Součet</h5>
                                    <h5 className="af-class-sum-title">{state.sum} Kč</h5>
                                </div>

                                <div className="af-class-dropdown-cart-btn-container">
                                    <Link href='/cart'><a href="#" className="af-class-button af-class-default-button af-class-big-default af-class-dropdown-cart-btn w-button">K pokladně</a>
                                    </Link>
                                    <Link href='/cart'><a href="#" className="af-class-button af-class-default-button af-class-big-default af-class-dropdown-cart-btn af-class-dropdown-cart-btn-2 w-button">Do košíku</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="af-class-pointer af-class-cart-pointer" />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default CartNav

