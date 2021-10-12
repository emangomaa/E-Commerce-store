import { event } from "jquery";
import React, { Component } from "react";
import "./Account.css";

class Account extends Component {
  state = {
    username:"",
    email:"",
    password:"",
    displayForm:true
  }
  handleUsername = event =>{
      this.setState({username:event.target.value})
  }
  handleEmail = event =>{
    this.setState({email:event.target.value})
  }
  handlePassword= event =>{
    this.setState({password:event.target.value})
  }
  handleRegister= event =>{
    event.preventDefault();
    this.setState({displayForm:false})
  }
  handleLogin= event =>{
    event.preventDefault();
    this.props.history.push("/products")
  }
  render() {
    const {username,email,password,displayForm}=this.state;
    
    return (
      <div className="account">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-6 col-lg-5 account-img mb-4">
              <img src="/assets/images/image1.png" />
            </div>
            <div className="col-12 col-md-6 col-lg-5 row account-form mt-4">
              <div className="col-6">
                <span
                  style={{
                    borderBottom:"3px solid #ff523b",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </span>
              </div>
              <div className="col-6">
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Login
                </span>
              </div>
              {(displayForm)?
              <form onSubmit={this.handleRegister} className="p-5">
                <input
                  className="col-12 mb-3 p-2"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleUsername}
                />
                <input
                  className="col-12 mb-3 p-2"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleEmail}
                />
                <input
                  className="col-12 mb-3 p-2"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handlePassword}
                />
                <input
                  className="col-6 mb-3 p-2"
                  name="submit"
                  type="submit"
                  value="Register"
                />
                <br />
                <a className="col-12 mb-3 p-2" href="#">
                  forget password?
                </a>
              </form>
              :
              <form onSubmit={this.handleLogin} className="p-5">
                <input
                  className="col-12 mb-3 p-2"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="col-12 mb-3 p-2"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="col-6 mb-3 p-2"
                  name="submit"
                  type="submit"
                  value="Login"
                />
                <br />
                <a className="col-12 mb-3 p-2" href="#">
                  forget password?
                </a>
              </form>
  }
            </div>
              
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
