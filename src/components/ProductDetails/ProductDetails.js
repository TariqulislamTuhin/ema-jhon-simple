import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import fakeData from "../../fakeData/products.json";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { id = "n/a" } = useParams();
  const product = fakeData.find((pd) => pd.key === id);
//   const [searchParams] = useSearchParams();
//   console.log(searchParams.get("product_id"));
  return (
    <div>
      {/* <h1>product: {product.name}</h1> */}
      <Product product={product} showAddtoCart={false} />
    </div>
  );
};

export default ProductDetails;
