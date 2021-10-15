import React from "react";
import Ratting from "../Ratting/Ratting";
import "../Home/Home.css";
import { Link } from "react-router-dom";
const ProductDetails = (props) => {
  var p1 = props.LatestProducts.filter(
    (p) => p.id === parseInt(props.match.params.id)
  )[0];

  var p2 = props.FeaturedProducts.filter(
    (p) => p.id === parseInt(props.match.params.id)
  )[0];

  var product;
  if (p1 === undefined) {
    product = p2;
    console.log(product);
  } else {
    product = p1;
    console.log(product);
  }
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1>product details</h1>
        </div>
        <div className="col-8 col-sm-6 col-md-4 mb-3 p-4">
          <img src={process.env.PUBLIC_URL + `${product.src}` } alt="product img"/>
        </div>
        <div className="col-8 col-sm-6 col-md-4 mb-3 p-4">
          <h4> Product No.{props.match.params.id}</h4>
          <h3>{product.name}</h3>
          <p>details about the product</p>
          <p>{product.price}</p>

          <Ratting />
          <Link
                  style={{
                    color: "#858585",
                    fontSize: 25,
                    padding:20
                  }}
                  to="/shoppingCart"
                  class="fas fa-shopping-cart col-12"
                  onClick={()=> props.handleAdd(product)}
          ></Link>
          <Link to="/products" className="button col-12">Back To Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
