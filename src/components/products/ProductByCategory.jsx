import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductByCategory() {
  let { categoryId } = useParams();
  return (
    <div>
      <h1>{categoryId}</h1>
      <Product />
    </div>
  );
}

export default ProductByCategory;
