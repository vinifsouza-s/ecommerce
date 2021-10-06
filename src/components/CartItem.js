import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";

const CartItem = ({ item }) => {
  const imagePath = `/images/${item.name
    .toLowerCase()
    .split(' ')
    .join('-')}.png`

  const { removeItem } = useContext(CartContext);
  return (

    <li className='CartItem__item'>
      <img src={imagePath} alt={imagePath} />
      <button className='CartItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );

};


export default CartItem;
