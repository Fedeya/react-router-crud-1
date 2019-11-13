import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <NavLink to="/products" className="navbar-brand">
        React CRUD & Routing
      </NavLink>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/new-product" activeClassName="active">
            New Product
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;