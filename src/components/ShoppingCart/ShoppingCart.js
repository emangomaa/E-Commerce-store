import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../index.css'
class ShoppingCart extends Component {
  state = {
    products:[...this.props.ShoppingProducts],
  }

  render() {
    return (
      <div className="row container m-auto">
        <h1 className="col-12 m-5">Shopping Cart</h1>
        
        <div className="col-12 d-none d-md-block">
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
              {this.props.ShoppingProducts.map((p)=>(
                <React.Fragment key={p.id}>
                  <tr >
                    <td><img style={{width:"50px",height:"70px"}} src={process.env.PUBLIC_URL +`${p.src}`}/></td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>
                      <button onClick={()=>this.props.handleIncreaseCount(p)} className="btn btn-primary  mx-2"> + </button>{p.amount}<button onClick={()=>this.props.handleDecreaseCount(p)} className="btn btn-primary mx-2">-</button>
                    </td>
                    <td>{parseInt(p.price)*p.amount}.00 $</td>
                    <td><button onClick={()=>this.props.handleDelete(p)} className="btn btn-outline-danger">Delete</button></td>
                  </tr>
                  
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        {this.props.ShoppingProducts.map(p =>(
          <React.Fragment key={p.id}>
            <div style={{border:"2px solid lightgray"}} className="col-12 d-block d-md-none mb-3">
             <div className="row p-1">
                <div className="col-4">
                  <img src={process.env.PUBLIC_URL +`${p.src}`} alt="product imagr"/>
                </div>
                <div className="col-8 p-2">
                  <p>{p.name}</p>
                  <p>Price:{p.price}</p>
                  <div>
                  <button onClick={()=>this.props.handleIncreaseCount(p)} className="btn btn-primary  mx-2"> + </button>{p.amount}<button onClick={()=>this.props.handleDecreaseCount(p)} className="btn btn-primary mx-2">-</button>
                  </div>
                  <p>Total Price: {parseInt(p.price)*p.amount}.00 $</p>
                  <button onClick={()=>this.props.handleDelete(p)} className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
        <Link style={{display:"inline-block"}} to="/products" className="button col-12 mb-2 w-25 text-center">Back To Products</Link>
      </div>
    );
  }
}

export default ShoppingCart;
