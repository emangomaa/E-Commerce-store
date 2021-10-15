import React, { Component } from "react";
import "./Home.css";
import '../../index.css'
import Ratting from "../Ratting/Ratting";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <>
        <div className="landingpage">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 align-self-center">
                <h1 className="col-12">Give Your Workout A New Style !</h1>
                <p className="col-12 pb-3">
                  Success isn't always about greatness. It's about consistency.
                  Consistent hard work gain success. Gretness will come
                </p>
                <Link to="/account" className="col-12 button">Register Now →</Link>
              </div>
              <div className="col-12 col-md-6 mt-5">
                <img src="/E-Commerce-store/images/image1.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="first-show col-12 col-md-6 col-lg-4 mb-4">
              <img src="/images/category-1.jpg" />
            </div>
            <div className="first-show col-12 col-md-6 col-lg-4 mb-4">
              <img src="/images/category-2.jpg" />
            </div>
            <div className="first-show col-12 col-md-6 col-lg-4 mb-4">
              <img src="/images/category-3.jpg"/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center pb-5">
              <h2>Featured Products</h2>
            </div>
            {this.props.FeaturedProducts.map((p,index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 p-4 product">
                <div className="row">
                  <div className="col-12">
                    <img src={p.src} alt="product" />
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
                    className="col-6 fas fa-shopping-cart"
                    onClick={()=> this.props.handleAdd(p)}
                  ></Link>
                </div> 
              </div> 
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center pb-5">
              <h2>Latest Products</h2>
            </div>
            {this.props.LatestProducts.map((p,index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 p-4 product">
              <div className="row">
                <div className="col-12">
                  <img src={p.src} alt="product" />
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
                  className="col-6 fas fa-shopping-cart"
                  onClick={()=> this.props.handleAdd(p)}
                ></Link>
              </div> 
            </div> 
            ))}
          </div>
        </div>
        <div className="exclusive">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 pt-5">
                <img src="/images/exclusive.png" />
              </div>
              <div className="col-12 col-md-6 pt-5">
                <span>Exclusive Available on RedStore</span>
                <h2>Smart Band 4</h2>
                <p>
                  The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                  AMOLED color full-touch display with adjustable brightness, so
                  everything is clear as can be.
                </p>
                <Link className="button" to="/products">Buy Now →</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-12 col-md-5 col-lg-3 person mb-5 p-3">
              <div>
                <i
                  style={{ fontSize: 35, padding: 10 }}
                  className="fas fa-quote-left"
                ></i>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam quam aspernatur animi maiores dolorum voluptates veniam
                repudiandae. Doloribus ea porro, deserunt libero, nemo itaque
                beatae iste inventore quidem saepe autem!
              </p>
              <Ratting />
              <div className="person-img">
                <img src="/images/user-1.png" />
              </div>
              <h5>Sean Parker</h5>
            </div>
            <div className="col-12 col-md-5 col-lg-3 person mb-5 p-3">
              <div>
                <i
                  style={{ fontSize: 35, padding: 10 }}
                  className="fas fa-quote-left"
                ></i>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam quam aspernatur animi maiores dolorum voluptates veniam
                repudiandae. Doloribus ea porro, deserunt libero, nemo itaque
                beatae iste inventore quidem saepe autem!
              </p>
              <Ratting />
              <div className="person-img">
                <img src="/images/user-2.png" />
              </div>
              <h5>Mike Smith</h5>
            </div>
            <div className="col-12 col-md-5 col-lg-3 person mb-5 p-3">
              <div>
                <i
                  style={{ fontSize: 35, padding: 10 }}
                  className="fas fa-quote-left"
                ></i>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam quam aspernatur animi maiores dolorum voluptates veniam
                repudiandae. Doloribus ea porro, deserunt libero, nemo itaque
                beatae iste inventore quidem saepe autem!
              </p>
              <Ratting />
              <div className="person-img">
                <img src="/images/user-3.png" />
              </div>
              <h5>Mabel Joe</h5>
            </div>
          </div>
        </div>
        <div className="sponsers">
          <div className="container">
            <div className="row">
              <div className=" col-6 col-md-2">
                <img src="/images/logo-godrej.png" alt="logo-godrej" />
              </div>
              <div className=" col-6 col-md-2">
                <img src="/images/logo-oppo.png" alt="logo-oppo" />
              </div>
              <div className=" col-6 col-md-2">
                <img
                  src="/images/logo-coca-cola.png"
                  alt="logo-coca-cola"
                />
              </div>
              <div className=" col-6 col-md-2">
                <img src="/images/logo-paypal.png" alt="logo-paypal" />
              </div>
              <div className=" col-6 col-md-2">
                <img src="/images/logo-philips.png" alt="logo-philips" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
