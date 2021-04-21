import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleGetProduct } from "../redux/product/productActions";

function Product() {
  const product = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetProduct());
  }, [dispatch]);

  return (
    <div className="product-page">
      <h1>Product</h1>

      <img src={product.picture} alt="product" className="product-picture" />
      <div>
        <h1>Main info</h1>
      </div>
      <div className="butons">
        <button>Description</button>
        <button>Attributes</button>
      </div>
      <div className="tab-content"></div>
    </div>
  );
}

export default Product;
