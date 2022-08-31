import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Form.css";
import image from "./edishop.png";

const Form = () => {
  return (
    <div className="form">
      <div className="logo">
        <p>EddieShop</p>
        <div className="credentials">
          <p className="welcome">Welcome Back</p>
          <p id="email">Your email</p>
          <input 
            type="text" 
            id="emaill" 
            placeholder="name@domain.com" />
          <p id="password">Password</p>
          <input
            type="text"
            id="passwordd"
            placeholder="at least 8 characters"/>
          <div className="check">
            <input type="checkbox" />
            Keep me logged in
            <p className="forgot">Forgot your password?</p>
          </div>
          <button type="login" className="login">
            Login
          </button>
          <p className="or">________________________ Or _______________________</p>
          <div className="icons">
            <div className="facebook">
            <FaFacebook />
            </div>
            <div className="google">
            <FaGoogle />
            </div>
            <div className="instagram">
            <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <div className="signup">
          <p>
            Don't have an account? <a href="signup">Sign up</a>
          </p>
        </div>
        <img src={image} alt="img" />
      </div>
    </div>
  );
};
export default Form;
