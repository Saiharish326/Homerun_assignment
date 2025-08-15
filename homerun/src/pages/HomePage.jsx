import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../data/product.json'
import cementImg from '../assets/cement.jpg'

const HomePage = () => {
  // Replace image string with imported image
  const products = productsData.map(p => ({
    ...p,
    image: cementImg // If all use same image, otherwise map accordingly
  }));

  // Track quantity for each product by id
  const [quantities, setQuantities] = useState(
    products.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
  );
  const maxLimit = 10;

  const changeQty = (id, delta) => {
    setQuantities(prev => {
      let newQty = prev[id] + delta;
      if (newQty < 0) newQty = 0;
      if (newQty > maxLimit) newQty = maxLimit;
      return { ...prev, [id]: newQty };
    });
  };

  return (
    <div>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id]}
          changeQty={changeQty}
          maxLimit={maxLimit}
        />
      ))}
    </div>
  );
};

export default HomePage