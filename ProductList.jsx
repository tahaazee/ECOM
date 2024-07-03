import React, { useState } from 'react';
import ProductBox from './Productbox';
import "./productList.css"

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Example product data (replace with your actual data)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
     
    },
    {
      id: 3,
      name: 'Product 3',
      price: 24.99,
      
    },
    {
      id: 4,
      name: 'Product 4',
      price: 34.99,
     
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductBox key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
