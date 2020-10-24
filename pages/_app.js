import React, { useState, useEffect } from 'react';
import '../styles/webflow.css'
import '../styles/metaltec-156790.webflow.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar'
import Footer from '../components/footer'


const App = ({ Component, pageProps }) => {

  const [state, setState] = useState({
    data: [],
    sum: '(ツ)'
  });

  const updateState = async () => {
    console.log('UpdateState')
    let cartItems = await localStorage.getItem('products');
    let dataStorage = await JSON.parse(cartItems);
    if (dataStorage) {
      if (state.data.length != dataStorage.length) {
        let sum = 0;
        await dataStorage.forEach(el => {
          sum += parseInt(el.price, 10) * el.amount;
        });
        setState({ ...state, data: dataStorage, sum: sum })
      }
    }

    console.log(state)
  }

  useEffect(() => {
    updateState();
  });


  const deleteProduct = async (id) => {
    console.log(id)
    let stateStorage = state.data;
    for (let i = 0; i < stateStorage.length; i++) {
      if (stateStorage[i].id == id) {
        stateStorage.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('products', JSON.stringify(stateStorage));
    updateState();
  }

  const minus = (index, id) => {

    let stateStorage = state.data;
    if (!stateStorage) return false
    stateStorage[index].amount -= 1;
    if (stateStorage[index].amount <= 0) return deleteProduct(id)
    localStorage.setItem('products', JSON.stringify(stateStorage));
    updateState()
  }

  const plus = async (index, id) => {
    let stateStorage = state.data;
    if (!stateStorage) return false
    stateStorage[index].amount += 1;
    localStorage.setItem('products', JSON.stringify(stateStorage));
    updateState()
  }







  return <>

    <Navbar plus={plus} minus={minus} deleteProduct={deleteProduct} />
    <Component plus={plus} minus={minus} deleteProduct={deleteProduct} {...pageProps} />
    <Footer />

  </>
}

export default App;
