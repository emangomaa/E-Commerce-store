import React, { Component } from "react";
import "./Products.css";
import Ratting from "../Ratting/Ratting";
class Products extends Component {
  state = {};
  render() {
    return (
      <div className="all-products">
        <div className="container">
          <div className="row">
            <div className="col-6  product-header">
              <h2>All Products</h2>
            </div>
            <div className="col-6">
              <select style={{ borderColor: "#ff523b" }}>
                <option value="">Default Sorting</option>
                <option value="">Sort by price</option>
                <option value="">Sort by ratting</option>
                <option value="">Sort by popularity</option>
                <option value="">Sort by sale</option>
              </select>
            </div>
            {this.props.FeaturedProducts.map((p,index) => (
              <div key={index} className="col-10 col-sm-6 col-md-3  mb-3 p-4">
                <img src={p.src} alt="product" />
                <p className="pt-3">{p.name}</p>
                <Ratting />
                <span>{p.price}</span>
              </div>
            ))}
            {this.props.LatestProducts.map((p,index) => (
              <div key={index} className="col-10 col-sm-6 col-md-3  mb-3 p-4">
                <img src={p.src} alt="product" />
                <p className="pt-3">{p.name}</p>
                <Ratting />
                <span>{p.price}</span>
              </div>
            ))}

            <div className="col-12 col-sm-6 col-md-3 product-footer">
              <div className="page-num">1</div>
              <div className="page-num">2</div>
              <div className="page-num">3</div>
              <div className="page-num">4</div>
              <div className="page-num">→</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
