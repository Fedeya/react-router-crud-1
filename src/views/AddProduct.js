import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"

import Error from "../components/Error";


function AddProduct({ history, setReload }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleChangeRadio = e => {
    setCategory(e.target.value);
  }

  const addProduct = async e => {
    e.preventDefault();
    
    if (name === "" || price === "" || category === "") {
      setError(true);
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/restaurant", {
        name,
        price,
        category
      });
      if(res.status === 201){
        Swal.fire({
          title: "Product Created",
          text: "The product was created correctly",
          icon: "success"
        });
      }
    } catch (err) {
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
      <h1 className="text-center">Add New Product</h1>
      {
        error && <Error message="All Fields is Required"/>
      }
      <form
        className="mt-5"
        onSubmit={addProduct}
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name Saucer"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price Saucer</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Price Saucer"
            onChange={e => setPrice(e.target.value)}
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
            />
            <label className="form-check-label">
              Salad
            </label>
          </div>
        </div>

        <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Add Product" />
      </form>
    </div>
  );
}

export default AddProduct;