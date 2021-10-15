import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../index.css'
class ShoppingCart extends Component {
  state = {
    products:[...this.props.ShoppingProducts],
    maxAmount:10,
    minAmount:0
  }
  
  increaseCount(p){
    let products = [...this.state.products];
    let index = products.indexOf(p)
    products[index] = {...products[index]}
    if(products[index].amount < this.state.maxAmount){
      products[index].amount++;
    }
    this.setState({products })
  }

  decreaseCount(p){
    let products = [...this.state.products];
    let index = products.indexOf(p)
    products[index] = {...products[index]}
    if(products[index].amount !== 1){
      products[index].amount--;
    }
    this.setState({products })
  }
  
  handleDelete(p){
    let products = this.state.products.filter(product=>product.id !== p.id)
    this.setState({products})
    console.log(products)
  }

  render() {
    return (
      <div className="container">
        <h1 className="col-12">Shopping Cart</h1>
        
        <table className="table table-hover mb-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Total Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((p)=>(
              <React.Fragment key={p.id}>
                <tr >
                  <td><img style={{width:"50px",height:"70px"}} src={process.env.PUBLIC_URL +`${p.src}`}/></td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>
                    <button onClick={()=>this.increaseCount(p)} className="btn btn-primary  mx-2"> + </button>{p.amount}<button onClick={()=>this.decreaseCount(p)} className="btn btn-primary mx-2">-</button>
                  </td>
                  <td>{parseInt(p.price)*p.amount}.00 $</td>
                  <td><button onClick={()=>this.handleDelete(p)} className="btn btn-outline-danger">Delete</button></td>
                </tr>
                
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <Link to="/home" className="button col-12">Back To Home Products</Link>
      </div>
    );
  }
}

export default ShoppingCart;
