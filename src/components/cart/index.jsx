import React from 'react';

export default function Cart({ cart, setCart }) {
  const removeFromCart = productRemove => {
    setCart(cart.filter(product => product !== productRemove));
  };

  return (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="product" key={index}>
            <h3> {product.name} </h3>
            <h4> {product.cost} </h4>
            <img src={product.image} alt={product.name} />
            <br />
            <button type="button" onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
