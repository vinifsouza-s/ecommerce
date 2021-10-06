import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from './styles';

const HomePage = () => {
  const [products, setProducts] = useState();
  const [isShowing, setIsShowing] = useState(false);

  const fetchProducts = async () => {
    const { data } = await axios
      .get('http://localhost:3000/products')
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log('Err', err);
      });

    // eslint-disable-next-line no-console
    console.log(data);

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleMinicart = () => {
    if (isShowing) {
      setIsShowing(false);
    } else {
      setIsShowing(true);
    }
  };

  return (
    <>
      <header>
        <button type="button" onClick={handleMinicart}>
          Minicart
        </button>
        {isShowing && (
          <div>
            <h1>Conteudo do minicart</h1>
          </div>
        )}
      </header>
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
                    <section>
                      <h2>{product.name}</h2>
                      <img src={imagePath} alt={imagePath} />
                      <h3>R$ {product.price}</h3>
                      <h4>Score: {product.score}</h4>
                      <button type="button">Comprar</button>
                    </section>
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
