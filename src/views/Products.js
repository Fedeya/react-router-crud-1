import React from "react";
import ProductList from "../components/ProductList"

function Products({ products, setReload }) {
  return (
    <>
      <h1 className="text-center">Products</h1>
      <ul className="list-group mt-5">
        {
          products.map(product => (
            <ProductList key={product.id} setReload={setReload} product={product} />
          ))
        }
      </ul>
    </>
  );
}

export default Products;