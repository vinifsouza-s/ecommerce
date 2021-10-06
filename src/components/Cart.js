import { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";


const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
      {showCart && (

        <div className='cart__wrapper'>

          <div style={{ textAlign: "right" }}>
            <i src="."
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (

              <ul>
                <div>Cart Items</div>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Total Price :</div>
            <div style={{ marginLeft: 5 }}>
              R${cartItems.reduce((amount, item) => item.price + amount, 0)}
            </div>
          </div>
          <button

            className="checkout">Checkout to Payment</button>
        </div>
      )}
    </>
  );
};

export default Cart;
