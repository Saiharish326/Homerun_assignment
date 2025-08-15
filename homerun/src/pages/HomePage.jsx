import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import cementImg from '../assets/cement.jpg'

const HomePage = () => {
  const product = {
    id: 1,
    name: "Cement",
    image: cementImg,
    price: 100
  }
  const [quantity, setQuantity] = useState(0)
  const maxLimit = 10
  const changeQty = (id, delta) => {
  setQuantity(prev => {
    let newQty = prev + delta;
    if (newQty < 0) newQty = 0;
    if (newQty > maxLimit) newQty = maxLimit;
    return newQty;
  });
};
  return (
    <div>
      <ProductCard
        product={product}
        quantity={quantity}
        changeQty={changeQty}
        maxLimit={maxLimit}
      />
    </div>
  )
}

export default HomePage