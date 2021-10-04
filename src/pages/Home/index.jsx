import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
            return (
              <article key={product.name}>
                <h2>{product.name}</h2>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default HomePage;
