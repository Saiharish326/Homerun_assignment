import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import cementImg from '../assets/cement.jpg'

const HomePage = () => {
  const product = {
    id: 1,
    name: "Sample Product",
    image: cementImg,
    price: 100
  }
  const [quantity, setQuantity] = useState(1)
  const maxLimit = 10
  const changeQty = (newQty) => setQuantity(newQty)
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