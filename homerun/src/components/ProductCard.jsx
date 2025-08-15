import React, { useState } from 'react';

const ProductCard = ({
  product,
  quantity,
  changeQty,
  maxLimit,
}) => {
  const isMax = quantity >= maxLimit;
  const [error, setError] = useState('');

  // Handler for increment actions
  const handleAdd = (delta) => {
    if (quantity + delta > maxLimit) {
      setError('Maximum 10 allowed per order. Please place another order if required.');
    } else {
      setError('');
      changeQty(product.id, delta);
    }
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4" />
      <h2 className="text-lg font-semibold text-center">{product.name}</h2>
      <div className="mt-2 flex gap-2 items-center">
        <span className="text-xl font-bold">₹{product.price}</span>
        {/* <span className="text-gray-500 line-through text-sm">₹{product.mrp}</span> */}
        <span className="text-green-600 text-sm">{product.discount}</span>
      </div>

      {quantity > 0 ? (
        <div className="mt-4 flex items-center gap-1">
          <button
            onClick={() => changeQty(product.id, -5)}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={quantity <= 0}
          >
            {"<<"}
          </button>
          <button
            onClick={() => changeQty(product.id, -1)}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={quantity <= 0}
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => handleAdd(1)}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={isMax}
          >
            +
          </button>
          <button
            onClick={() => handleAdd(5)}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={isMax}
          >
            {">>"}
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleAdd(1)}
          className="mt-4 px-6 py-2 rounded bg-[#328616] text-white hover:bg-green-700"
          style={{ backgroundColor: '#328616' }}
        >
          Add
        </button>
      )}
      {error && (
        <div className="mt-2 text-red-600 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default ProductCard;