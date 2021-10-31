import React, { Component } from "react";
import "../../index.css";
import {NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light p-3"
      style={{
        fontSize: 18,
        backgroundColor: "#ffe5e5",
      }}
    >
      <div className="container-fluid">
        
        <NavLink className="navbar-brand" to="/home">
          <img style={{ width: 150 }} src={process.env.PUBLIC_URL+"/images/logo.png"} />
        </NavLink>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/account">
                Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shoppingCart">
                <img style={{ width: 30 }} src={process.env.PUBLIC_URL+"/images/cart.png"}/>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
