import React from 'react';
import ProductList from './product-item';

const Products = (props) => {

  return (
    <div className="af-class-block af-class-item-block">
      <div className="af-class-columns-3 w-row">
        <ProductList amount={props.amount} category={props.category} />
      </div>

    </div>
  )

}

export default Products;
