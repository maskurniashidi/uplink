import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductByCategory() {
  let { categoryId } = useParams();
  return (
    <div>
      <p>{categoryId}</p>
      <Product />
    </div>
  );
}

export default ProductByCategory;
