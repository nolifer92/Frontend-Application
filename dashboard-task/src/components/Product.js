import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    axios
      .get("https://api-test.innoloft.com/product/6781/")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product-page">
      <h1>Product</h1>

      <img src={product.picture} alt="product" className="product-picture" />
    </div>
  );
}

export default Product;
