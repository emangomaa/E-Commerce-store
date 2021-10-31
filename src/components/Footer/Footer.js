import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row text-center">
            <div className=" col-12 col-sm-6 col-md-4 mb-4">
              <h5>Download our App</h5>
              <p style={{ color: "gray" }}>
                Download App for Android and ios mobile phone.
              </p>
              <div className="img-box mb-2 mx-auto">
                <img src={process.env.PUBLIC_URL+"/images/play-store.png"} />
              </div>
              <div className="img-box mb-2 mx-auto">
                <img src={process.env.PUBLIC_URL+"/images/app-store.png"} />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="img-box mx-auto">
                <img src={process.env.PUBLIC_URL+"/images/logo-white.png"} />
              </div>
              <p style={{ color: "gray" }}>
                Our Purpose Is To Sustainably Make th Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <h5>Useful Links</h5>

              <ul className="useful-links">
                <li><a href="#">Coupons</a></li>
                <li><a href="#">Blog Post</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Join Affiliate</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <h5>Follow us</h5>

              <ul className="follow-us">
                <li><a href="http://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                <li><a href="http://www.facebook.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="http://www.facebook.com"><i className="fab fa-instagram"></i></a></li>
                <li><a href="http://www.facebook.com"><i  className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 footer-copy text-center p-5">
          &copy; CopyRight 2021 - Developed By Eman Gomaa
        </div>
    </div>
  );
};

export default Footer;
