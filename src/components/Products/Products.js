import React, { Component} from "react";
import "./Products.css";
import Ratting from "../Ratting/Ratting";
import {Link} from "react-router-dom"
class Products extends Component {
  state = {};
  render() {
    return (
      <div className="all-products">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-8 col-lg-10">
              <h2>All Products</h2>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <select className="" style={{ borderColor: "#ff523b" }}>
                <option value="">Default Sorting</option>
                <option value="">Sort by price</option>
                <option value="">Sort by ratting</option>
                <option value="">Sort by popularity</option>
                <option value="">Sort by sale</option>
              </select>
            </div>
            {this.props.FeaturedProducts.map((p,index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3 mb-2 px-5 product">
              <div className="row">
                <div className="col-12">
                  <img src={process.env.PUBLIC_URL+ `${p.src}`} alt="product" />
                  <Link to={`/productdetails/${p.id}`} className="detailsbutton">
                    Details 
                  </Link>
                </div>
                <p className="col-12 p-3">{p.name}</p>
                <Ratting />
                <span className="col-6">{p.price}</span>
                <Link
                  style={{
                    color: "#858585",
                    fontSize: 25,
                    textAlign: "right"
                  }}
                  to="/shoppingCart"
                  className="col-6 px-3 fas fa-shopping-cart"
                  onClick={()=> this.props.handleAdd(p)}
                ></Link>
              </div> 
            </div> 
            ))}
            {this.props.LatestProducts.map((p,index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3 mb-2 px-5 product">
              <div className="row">
                <div className="col-12">
                  <img src={process.env.PUBLIC_URL+ `${p.src}`} alt="product" />
                  <Link to={`/productdetails/${p.id}`} className="detailsbutton">
                    Details 
                  </Link>
                </div>
                <p className="col-12 pt-3">{p.name}</p>
                <Ratting />
                <span className="col-6">{p.price}</span>
                <Link
                  style={{
                    color: "#858585",
                    fontSize: 25,
                    textAlign: "right"
                  }}
                  to="/shoppingCart"
                  className="col-6 px-3 fas fa-shopping-cart"
                  onClick={()=> this.props.handleAdd(p)}
                ></Link>
              </div> 
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
