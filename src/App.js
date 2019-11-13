import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

// Views
import Products from "./views/Products";
import AddProduct from "./views/AddProduct";
import EditProduct from "./views/EditProduct";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const consultAPI = async () => {
      const res = await axios.get("http://localhost:4000/restaurant");

      setProducts(res.data);
    }

    if (reload) {
      consultAPI();
      setReload(false);
    }

  }, [reload]);

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route
            exact path="/products"
            render={props => <Products products={products} setReload={setReload} {...props} />}
          />
          <Route
            exact path="/new-product"
            render={props => <AddProduct setReload={setReload} {...props} />}
          />
          <Route 
            exact path="/products/edit/:id"
            render={props => {
              const id = parseInt(props.match.params.id);
              const product = products.find(product => product.id === id); 

              return <EditProduct {...props} product={product} setReload={setReload} />
            }}
          />
          <Redirect exact from="/" to="/products" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
