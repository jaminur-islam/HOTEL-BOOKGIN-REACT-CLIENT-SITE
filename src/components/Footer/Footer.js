import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className=" main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-container m-2">
                <h5 className="mb-5">
                  <i className="fas fa-hotel"></i> <i className="name">COAST</i>
                  HOTELS
                </h5>
                <p>
                  If you want to get good service then be sure to book our room
                  The way we serve you you won't find anywhere else, So come to
                  Chola without delay
                </p>
                <span>
                  Visit us to have a fun time, book a room from my website now
                </span>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="m-2 footer-container">
                <h5>CONTACT INFO</h5>
                <h6> Address </h6>
                <span>Coast Hotels</span>
                <br />
                <span>120 CA 15TH Avenue-Suite 214 ,INDIA</span>
                <h6> Phone Number </h6>
                <span> 0150503334445</span>
                <br />
                <span> 0130503334445</span>
                <h6>Email Address</h6>
                <span>support@besteebsot.zendesk.com</span>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="m-2 footer-container">
                <h5>PAGES</h5>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Service</a>
                </li>

                <li>
                  <a href="#home">Abount us</a>
                </li>
                <li>
                  <a href="#home">User profile</a>
                </li>
                <li>
                  <a href="#home">Booking</a>
                </li>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="m-2 footer-container">
                <h5 className="mb-3">FOLLOW US</h5>
                <ul>
                  <li>
                    <i className="fab fa-facebook-square"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter-square"></i>
                  </li>
                  <li>
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fab fa-google-plus-square"></i>
                  </li>
                  <li>
                    <i className="fab fa-youtube-square"></i>
                  </li>
                </ul>
                <h5 className="mb-4">MAILING LIST</h5>
                <span>
                  Sign up for our mailing ist to get updates and offers
                </span>
                <input
                  className="p-2 mt-3 rounded"
                  type="text"
                  placeholder="Your E-mail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center fot">
        <span>
          Copyright 2021 | BESTWEBSOFT | All Rights Reserved | Designed by
          BestWebSoft
        </span>
      </div>
    </div>
  );
};

export default Footer;
