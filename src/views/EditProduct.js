import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import Error from "../components/Error";

function EditProduct({ product, setReload, history }) {

  const nameRef = useRef(null);
  const priceRef = useRef(null);

  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleChangeRadio = e => {
    setCategory(e.target.value);
  }

  const editProduct = async e => {
    e.preventDefault();

    if (nameRef.current.value === "" || priceRef.current.value === "") {
      setError(true);
      return;
    }

    const categorySaucer = category === "" ? product.category : category;

    const newSaucer = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      category: categorySaucer
    }

    try {
      await axios.put(`http://localhost:4000/restaurant/${product.id}`, newSaucer);
      Swal.fire({
        title: "Product Edited",
        text: "the product was edited correctly",
        icon: "success"
      })
    } catch {
      setError(true);
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong!",
        icon: "error"
      })
    }

    setError(false);
    setReload(true);
    history.push("/products");

  }

  return (
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Edit Product</h1>
      {
        error && <Error message="All Fields is Required" />
      }
      <form
        className="mt-5"
        onSubmit={editProduct}
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name Saucer"
            ref={nameRef}
            defaultValue={product.name}
          />
        </div>

        <div className="form-group">
          <label>Price Saucer</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Price Saucer"
            ref={priceRef}
            defaultValue={product.price}
          />
        </div>

        <legend className="text-center">Category:</legend>
        <div className="text-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="dessert"
              onChange={handleChangeRadio}
              defaultChecked={product.category === "dessert"}
            />
            <label className="form-check-label">
              Dessert
          </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="drink"
              onChange={handleChangeRadio}
              defaultChecked={product.category === "drink"}

            />
            <label className="form-check-label">
              Drink
          </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="cuts"
              onChange={handleChangeRadio}
              defaultChecked={product.category === "cuts"}
            />
            <label className="form-check-label">
              Cuts
          </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              value="salad"
              onChange={handleChangeRadio}
              defaultChecked={product.category === "salad"}
            />
            <label className="form-check-label">
              Salad
          </label>
          </div>
        </div>

        <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Edit Product" />
      </form>
    </div>
  );
}

export default EditProduct;