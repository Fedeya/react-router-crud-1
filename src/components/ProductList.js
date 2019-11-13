import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
 
function Product({ product, setReload }) {

  const deleteProduct = async () => {
    await axios.delete(`http://localhost:4000/restaurant/${product.id}`);
    Swal.fire({
      icon: "success",
      title: "Product Deleted",
      text: "the product was deleted correctly" 
    });
    setReload(true);
  }

  return (
    <li 
      className="list-group-item d-flex justify-content-between align-items-center"
      data-category={product.category}
    >
      <p>
        { product.name + " " }
        <span className="font-weight-bold">
          ${product.price}
        </span>
      </p>
      <div>
        <Link 
          className="btn btn-success mr-2"
          to={`/products/edit/${product.id}`}
        >
            Edit
        </Link>
        <button className="btn btn-danger" onClick={deleteProduct} >
          Delete &times;
        </button>
      </div>
    </li>
  );
}

export default Product;