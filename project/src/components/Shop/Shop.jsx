import React from 'react'
import './Shop.css'
import Product from '../../common/Product/Product';

function Shop() {
  return (
    <div className="Shop  ">
      <div className="cont-products flex gap-2">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Shop