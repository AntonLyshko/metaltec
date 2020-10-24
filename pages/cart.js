import React, { useEffect, useState, Fragment } from 'react';
import $ from 'jquery'
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import ReactLoading from 'react-loading';

const Cart = (props, ctx) => {
  const router = useRouter()
  const [state, setState] = useState({
    data: [],
    sum: 0,
    delivery: 0,
    awake: false,
    step: 1,
    address: '',
    state: '',
    zipcode: '',
    city: '',
    name: '',
    phone: '',
    email: '',
    doprava: 'Osobní odběr'
  });

  const getStorage = async () => {
    let cartItems = await localStorage.getItem('products');
    let dataStorage = await JSON.parse(cartItems);
    if (dataStorage) {
      if (state.data.length != dataStorage.length) {
        let sum = 0;
        await dataStorage.forEach(el => {
          sum += parseInt(el.price, 10) * el.amount;
        });
        setState({ ...state, data: dataStorage, sum: sum })
        console.log(state)
      }
    }
  }

  const updateState = async () => {
    console.log(state.delivery)
    let cartItems = await localStorage.getItem('products');
    let dataStorage = await JSON.parse(cartItems);
    let sum = 0;
    await dataStorage.forEach(el => {
      sum += parseInt(el.price, 10) * el.amount;
    });
    setState({ ...state, data: dataStorage, sum: sum })
  }



  const awake = () => {
    if (!state.awake) {
      $('.order-step-2').slideUp(0);
      $('.order-step-loading').hide();
      $('.address-form-container').slideUp(0);
      $('.order-step-3').slideUp(0);
      setState({ ...state, awake: true })
    }
  }


  useEffect(() => {
    getStorage();
    awake();
  });

  const deleteProduct = async (id) => {
    await props.deleteProduct(id);
    getStorage();
  }

  const plus = async (index, id) => {
    await props.plus(index, id);
    updateState();
  }




  const minus = async (index, id) => {
    await props.minus(index, id);
    updateState();
  }

  const loginUser = async () => {
    console.log('User Signing In')
    await axios
      .post('http://localhost:1337/auth/local', {
        identifier: state.email,
        password: '123456',
      })
      .then(async (response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        await localStorage.setItem("token", response.data.jwt)
        await localStorage.setItem("user", response.data.user.id)
        return await createOrder()
      })
      .catch(async (error) => {
        console.log('An error occurred:', error.response);
        return await registerUser();
      });
  }

  const registerUser = async () => {
    console.log('User registration')
    await axios
      .post('http://localhost:1337/auth/local/register', {
        username: state.name,
        email: state.email,
        Phone: state.phone,
        password: '123456',
      })
      .then(async (response) => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem("token", response.data.jwt)
        localStorage.setItem("user", response.data.user.id)
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
  }

  const stepik = async () => {
    console.log(state)
    let step = state.step + 1;
    // input checking
    if (step == 3) {
      if (state.delivery > 0) {
        if (state.city.length < 3) {
          $('.warning').fadeIn();
          $('input[name="city"]').addClass('warning-input');
          return;
        }
        if (state.state.length < 3) {
          $('.warning').fadeIn();
          $('input[name="state"]').addClass('warning-input');
          return;
        }
        if (state.zipcode.length < 3) {
          $('.warning').fadeIn();
          $('input[name="zipcode"]').addClass('warning-input');
          return;
        }
        if (state.address.length < 3) {
          $('.warning').fadeIn();
          $('input[name="address"]').addClass('warning-input');
          return;
        }
      }
      let fullSum = state.sum + state.delivery;
      $('.af-class-cart-page-control').slideUp(500);
      $('.continue-btn').text('Platit ' + fullSum + ' Kč')
    }
    if (step == 4) {
      if (state.delivery > 0) {
        if (state.name.length < 3) {
          $('.warning').fadeIn();
          $('input[name="name"]').addClass('warning-input');
          return;
        }
        if (state.email.length < 3) {
          $('.warning').fadeIn();
          $('input[name="email"]').addClass('warning-input');
          return;
        }
        if (state.phone.length < 3) {
          $('.warning').fadeIn();
          $('input[name="phone"]').addClass('warning-input');
          return;
        }
      }
      let sum = state.sum + state.delivery;
      let user = await localStorage.getItem('user');
      let body = {
        'City': state.city,
        'State': state.state,
        'Address': state.address,
        'ZipCode': state.zipcode,
        'Order': state.data,
        'Delivery': state.doprava,
        'DeliveryPrice': state.delivery,
        'Sum': state.sum,
        'User': user
      };
      await setCookie(ctx, 'sum', sum);
      localStorage.setItem("order", JSON.stringify(body))
      await loginUser();
      $('.order-step-loading').show();
      $('.af-class-cart-page-btn-container').fadeOut(100);
      router.push('/checkout');
    }
    setState({ ...state, step: step })
    $('.order-step').slideUp(500);
    $('.order-step-' + step).slideDown(500);
  }

  const selectHandle = async (e) => {
    let value = $(e.target).val();
    let doprava = $('.af-class-doprava-select-html option:selected').text();
    value = parseInt(value, 10);
    setState({ ...state, delivery: value, doprava: doprava })
    if (value > 0) {
      $('.address-form-container').slideDown(500);
    } else {
      $('.address-form-container').slideUp(500);
    }
  }

  const onChange = (e) => {
    $('.warning').fadeOut();
    $('input').removeClass('warning-input');
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (

    <span className="af-view">
      <div className="af-class-body">
        <div className="af-class-main-wrapper">
          <div className="af-class-container w-container">
            <div className="af-class-block">
              <h1 className="af-class-block-title"><strong className="af-class-bold-text-3">Košík</strong><br /></h1>
              <div className="af-class-cart-page-container w-clearfix">
                <div className="af-class-order-step-container w-clearfix">
                  <div className="af-class-order-step">
                    <div className="af-class-cart-items-container order-step-1 order-step">
                      <Fragment>
                        {state.data.length ? (
                          <Fragment>
                            {state.data.map((item, index) => {

                              return (

                                <div className="af-class-dropdown-cart-item">
                                  <div className="af-class-amount-control">
                                    <div onClick={() => plus(index, item.id)} className="af-class-plus-amount">
                                      <img src={require("../images/plus.png")} loading="lazy" alt className="af-class-image-9" />
                                    </div>
                                    <div className="af-class-amount">
                                      <div className="af-class-text-block-9">{item.amount}</div>
                                    </div>
                                    <div className="af-class-minus-amount">
                                      <img onClick={() => minus(index, item.id)} src={require("../images/minys.png")} loading="lazy" alt className="af-class-image-10" />
                                    </div>
                                  </div>
                                  <div className="af-class-dropdown-cart-img"><img src={`http://localhost:1337${item.image}`} loading="lazy" alt className="af-class-image-7 cart-preview-img" /></div>
                                  <div className="af-class-dropdown-cart-desc">
                                    <h1 className="af-class-dropdown-cart-title">{item.name}</h1>
                                    <div className="af-class-dropdown-cart-cost">{item.price} Kč</div>
                                  </div>
                                  <div onClick={() => deleteProduct(item.id)} className="af-class-dropdown-item-control"><img src={require("../images/cross.png")} loading="lazy" alt className="af-class-image-8" /></div>
                                </div>
                              )
                            })
                            }


                          </Fragment>
                        ) : (
                            <Fragment>
                              <div className='prazdni-kosik'>
                                Košík prázdný
                              </div>
                            </Fragment>
                          )}
                      </Fragment>
                    </div>

                    <div className="af-class-cart-page-control">

                      <div className="af-class-cart-page-sum">
                        <div className="af-class-sum-container af-class-page">
                          <h5 className="af-class-sum-title af-class-page">Součet</h5>
                          <h5 className="af-class-sum-title af-class-page">{state.sum + state.delivery} Kč</h5>
                        </div>
                      </div>

                    </div>

                    <div className="af-class-order-step order-step-2 order-step">
                      <div className='doprava-title'>
                        Vyberte způsob doručení
                          </div>
                      <div className="af-class-cart-page-doprava">

                        <div className="af-class-doprava-select-container">

                          <div className="af-class-doprava-select w-embed">

                            <p>
                              <select onChange={(e) => selectHandle(e)} className="af-class-doprava-select-html" size={1}>
                                <option className="af-class-doprava-option" selected value={0}>Osobní odběr</option>
                                <option className="af-class-doprava-option" value={75}>Česká pošta Balík do ruky</option>
                                <option className="af-class-doprava-option" value={89}>PPL standardní doručení</option>
                              </select>
                            </p>
                            <style dangerouslySetInnerHTML={{ __html: "\n   .af-view .af-class-doprava-select-html{\n      border: none;\n      padding: 5px 5px 0px 5px;\n      border-radius: 5px;\n     }\n   .af-view .af-class-doprava-option{\n   \t\tborder-radius: 5px;\n      padding: 2px;\n   }\n   .af-view .af-class-doprava-option:hover{\n   \t\tbackground: #f4f4f4;\n   }\n   " }} >
                            </style>
                          </div>
                        </div>
                        <div className="af-class-sum-sum">
                          <h5 className="af-class-sum-sum-content">{state.delivery}</h5>
                          <h5 className="af-class-sum-title af-class-page af-class-doprava"> Kč</h5>
                        </div>
                      </div>
                      <div className='address-form-container'>

                        <Form>
                          <Row>
                            <Col xs={12} md={6}>
                              <Form.Group >
                                <Form.Label>Město</Form.Label>
                                <Form.Control onChange={e => onChange(e)} value={state.city} name='city' type="text" placeholder="Praha" />
                              </Form.Group>
                              <Form.Group >
                                <Form.Label>PSČ</Form.Label>
                                <Form.Control onChange={e => onChange(e)} value={state.zipcode} name='zipcode' type="text" placeholder="150 00" />
                              </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                              <Form.Group >
                                <Form.Label>Okres</Form.Label>
                                <Form.Control onChange={e => onChange(e)} value={state.state} name='state' type="text" placeholder="Praha 5" />
                              </Form.Group>
                              <Form.Group >
                                <Form.Label>Adresa, Apartment</Form.Label>
                                <Form.Control onChange={e => onChange(e)} value={state.address} name='address' type="text" placeholder="Adresa, Apartment" />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Form>
                        <div className='warning'>Třeba vyplnit všechna pole</div>
                      </div>
                    </div>

                    <div className="af-class-order-step order-step-3 order-step">
                      <div className='auth-step-container'>
                        <Form>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Celé jméno</Form.Label>
                            <Form.Control onChange={e => onChange(e)} type="text" name='name' placeholder="Zadejte své celé jméno" value={state.name} />
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={e => onChange(e)} type="email" name='email' placeholder="Zadejte email" value={state.email} />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>Telefonní číslo</Form.Label>
                            <Form.Control onChange={e => onChange(e)} value={state.phone} name='phone' type="phone" placeholder="Zadejte telefonní číslo" />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                    <div className='order-step-loading'>
                      <div className='loading-element'><ReactLoading type={'bubbles'} color="#ff373a" /></div>
                    </div>
                    <Fragment>
                      {state.data.length ? (
                        <Fragment>

                          <div className="af-class-cart-page-btn-container">
                            <a onClick={() => stepik()} href="#" className="af-class-button-2 af-class-order-btn-1 w-button continue-btn">
                              Pokračovat
                      </a>
                          </div>

                        </Fragment>
                      ) : (
                          <Fragment>
                          </Fragment>
                        )}
                    </Fragment>

                  </div>

                </div>
                <div className="af-class-cart-script w-embed w-script">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </span>
  )
}

export default Cart