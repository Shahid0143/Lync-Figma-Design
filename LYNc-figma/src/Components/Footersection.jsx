import React from "react";
import "../Styles/Footersection.scss";
import floor from "../assets/Floor.png";
import floor1 from "../assets/Floor1.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiJoystick } from "react-icons/bi";
export const Footersection = () => {
  return (
    <div className="footer-box">
      <div className="image-container">
        <img src={floor1} alt="Background" />
        <div className="content-container">
          <div className="content">
            <h1 className="lync-text">LYNC</h1>
            <h3>Got a Game idea? Let make a big Together!!! </h3>
            <div className="button-container">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mid-foot-box">
        <div className="txt-icon-box">
          <h2>LYNC</h2>
          <p>A Game infrastructure</p>
          <div className="icon-item">
            <TiSocialLinkedinCircular style={{ fontSize: "30px" }} />
            <AiFillTwitterCircle style={{ fontSize: "30px" }} />
            <BiJoystick style={{ fontSize: "30px" }} />
          </div>
        </div>

        <div>
          <h3>Product</h3>
          <p>SDKs!</p>
          <p>Transfer API</p>
          <p>Token API</p>
          <p>NET API</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About us</p>
          <p>Press Kit</p>
          <p>Security</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email</p>
          <p>Discord</p>
          <p>Telegram</p>
          <p>Press</p>
        </div>
        <div className="newsletter-signup">
          <h4>Supercharge your inbox</h4>
          <p>Sign up for our newsletter</p>
          <div className="input-container">
            <input type="text" placeholder="Enter your email address" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
