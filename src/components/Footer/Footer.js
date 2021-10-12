import React from "react";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 row">
            <div className=" col-12 col-md-3 content-item mb-4">
              <h5>Download our App</h5>
              <p style={{ color: "gray" }}>
                Download App for Android and ios mobile phone.
              </p>
              <div className="img-box mb-2">
                <img src="/images/play-store.png" />
              </div>
              <div className="img-box mb-2">
                <img src="/images/app-store.png" />
              </div>
            </div>
            <div className="col-12 col-md-3 content-item mb-4">
              <div className="img-box">
                <img src="/images/logo-white.png" />
              </div>
              <p style={{ color: "gray" }}>
                Our Purpose Is To Sustainably Make th Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>
            <div className="col-12 col-md-3 content-item mb-4">
              <h5>Useful Links</h5>

              <p>
                <a href="#">Coupons</a>
              </p>
              <p>
                <a href="#">Blog Post</a>
              </p>
              <p>
                <a href="#">Return Policy</a>
              </p>
              <p>
                <a href="#">Join Affiliate</a>
              </p>
            </div>
            <div className="col-12 col-md-3 content-item mb-4">
              <h5>Follow us</h5>
              <p>
                <a href="http://www.facebook.com">
                  <i
                    style={{ fontSize: 30, color: "#0B84EE" }}
                    className="fab fa-facebook-square"
                  ></i>
                </a>
                <span> Facebook</span>
              </p>
              <p>
                <a href="http://www.twitter.com">
                  <i
                    style={{ fontSize: 30, color: "#53BDFF" }}
                    className="fab fa-twitter-square"
                  ></i>
                </a>
                <span> Twitter</span>
              </p>
              <p>
                <a href="http://www.insta.com">
                  <i
                    style={{ fontSize: 30, color: "#A54BFF" }}
                    className="fab fa-instagram-square"
                  ></i>
                </a>
                <span> Instagram</span>
              </p>
              <p>
                <a href="http://www.youtube.com">
                  <i
                    style={{ fontSize: 30, color: "red" }}
                    className="fab fa-youtube"
                  ></i>
                </a>
                <span> Youtube</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 footer-copy text-center p-5">
          &copy; CopyRight 2021 - Developed By Eman Gomaa
        </div>
      </div>
    </div>
  );
};

export default Footer;
