import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import About from "../About/About";
import Account from "../Account/Account";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import "../../index.css";
import NotFound from "../Notfound/Notfound";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      featuredProducts: [
        {
          "id": 1,
          "src": '/images/product-1.jpg',
          "name": "Red Printed T-Shirt",
          "price": "50.00 $",
          "amount": 1
        },
        {
          "id": 2,
          "src": "/images/product-2.jpg",
          "name": "Shoe",
          "price": "60.00 $",
          "amount": 1
        },
        {
          "id": 3,
          "src": "/images/product-3.jpg",
          "name": "Trosers",
          "price": "10.00 $",
          "amount": 1
        },
        {
          "id": 4,
          "src": "/images/product-4.jpg",
          "name": "blue Printed T-Shirt",
          "price": "20.00 $",
          "amount": 1
        }
      ],
      latestProducts: [
        {
          "id": 5,
          "src": "/images/product-5.jpg",
          "name": "Red Printed T-Shirt",
          "price": "50.00 $",
          "amount": 1
        },
        {
          "id": 6,
          "src": "/images/product-6.jpg",
          "name": "Red Printed T-Shirt",
          "price": "60.00 $",
          "amount": 1
        },
        {
          "id": 7,
          "src": "/images/product-7.jpg",
          "name": "Red Printed T-Shirt",
          "price": "10.00 $",
          "amount": 1
        },
        {
          "id": 8,
          "src": "/images/product-8.jpg",
          "name": "Red Printed T-Shirt",
          "price": "230.0 $0",
          "amount": 1
        },
        {
          "id": 9,
          "src": "/images/product-9.jpg",
          "name": "Red Printed T-Shirt",
          "price": "240.0 $0",
          "amount": 1
        },
        {
          "id": 10,
          "src": "/images/product-10.jpg",
          "name": "Red Printed T-Shirt",
          "price": "70.00 $",
          "amount": 1
        },
        {
          "id": 11,
          "src": "/images/product-11.jpg",
          "name": "Red Printed T-Shirt",
          "price": "50.00 $",
          "amount": 1
        },
        {
          "id": 12,
          "src": "/images/product-12.jpg",
          "name": "Red Printed T-Shirt",
          "price": "60.00 $",
          "amount": 1
        }
      ],
      shoppingProducts:[],
      maxAmount:10
    };
    this.addToCart = this.addToCart.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  
  
  
  addToCart(p){
   let products = this.state.shoppingProducts
   if(products.length === 0){

    products.push(p)
    this.setState({shoppingProducts : products})
     
   }
   else{
    (products.some(product => product === p))?alert("product exist"): products.push(p);
      
    this.setState({shoppingProducts : products})
   }
   
  }
  deleteFromCart(p){
    let products = this.state.shoppingProducts.filter(product => product.id !== p.id);
    this.setState({shoppingProducts:products})
  }

  increaseCount(p){
    let products = [...this.state.shoppingProducts];
    let index = products.indexOf(p)
    products[index] = {...products[index]}
    if(products[index].amount < this.state.maxAmount){
      products[index].amount++;
    }
    this.setState({shoppingProducts:products })
  }

  
  decreaseCount(p){
    let products = [...this.state.shoppingProducts];
    let index = products.indexOf(p)
    products[index] = {...products[index]}
    if(products[index].amount !== 1){
      products[index].amount--;
    }
    this.setState({shoppingProducts:products })
  }
  
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main">
          <Switch>
            <Route
              path="/products"
              render={() => (
                <Products
                  LatestProducts={this.state.latestProducts}
                  FeaturedProducts={this.state.featuredProducts}
                  handleAdd={this.addToCart}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/account" component={Account} />
            <Route
              path="/home"
              exact
              render={(props) => (
                <Home
                  LatestProducts={this.state.latestProducts}
                  FeaturedProducts={this.state.featuredProducts}
                  ShoppingProducts={this.state.shoppingProducts}
                  handleAdd={this.addToCart}
                  {...props}
                />
              )}
            />
            <Route path="/shoppingCart" render={(props)=>(<ShoppingCart ShoppingProducts ={this.state.shoppingProducts} handleDelete={this.deleteFromCart} handleIncreaseCount={this.increaseCount} handleDecreaseCount={this.decreaseCount} {...props}/>)} />
            <Route
              path="/productdetails/:id"
              render={(props) => (
                <ProductDetails
                  FeaturedProducts={this.state.featuredProducts}
                  LatestProducts={this.state.latestProducts}
                  handleAdd={this.addToCart}
                  {...props}
                />
              )}
            />
            <Redirect from="/" to="/home" />
            <Redirect to="/notfound" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
