import { useContext, useEffect, useState } from "react";
import "./ProductCard.css";
import CartContext from "../context/cart/CartContext";
import axios from "axios";

const ProductCard = (props) => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState();


  const fetchProducts = async () => {
    const { data } = await axios
      .get('http://localhost:3000/products')
      .catch(err => {

        console.log('Err', err);
      });

    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (

    <section className='product_section'>
      {products &&
        products.map(product => {
          const imagePath = `/images/${product.name
            .toLowerCase()
            .split(' ')
            .join('-')}.png`;
          return (

            <div className='productCard__wrapper'>
              <div>
                <h2>{product.name}</h2>
                <img src={imagePath} alt={imagePath} />
                <h3>R$ {product.price}</h3>
                <h4>Score: {product.score}</h4>
                <button
                  className='ProductCard__button'
                  onClick={() => addToCart(product)}
                >
                  Add to basket
                </button>
              </div>
            </div>

          );
        })}
    </section>

  );
};

export default ProductCard;
