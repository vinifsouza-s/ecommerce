import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from './styles';

const HomePage = () => {
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
    <>
      <section>
        {products &&
          products.map(product => {
            const imagePath = `/images/${product.name
              .toLowerCase()
              .split(' ')
              .join('-')}.png`;
            return (
              <>
                <Article key={product.name}>
                  <div>
                    <h2>{product.name}</h2>
                    <img src={imagePath} alt={imagePath} />
                    <h3>R$ {product.price}</h3>
                    <h4>Score: {product.score}</h4>
                    <button type="button">Comprar</button>
                  </div>
                </Article>
              </>
            );
          })}
      </section>
    </>
  );
};

export default HomePage;
