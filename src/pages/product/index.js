import React, { useEffect, useState } from 'react';
import { productService } from '../../services';
import { ProductComponent } from '../../components';

const Product = () => {
  const [products, setProduct] = useState([]);
  const [isLoginLoading, setLoginLoading] = useState(false);
  useEffect(() => {
    console.log(isLoginLoading);
    setLoginLoading(true);
    productService
      .getProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  }, []);

  return (
    <>
      <h1>
        Product
        {isLoginLoading}
      </h1>
      {isLoginLoading && <p>Loading...</p>}
      {products.map((e) => {
        return <ProductComponent data={e} />;
      })}
    </>
  );
};

export default Product;
