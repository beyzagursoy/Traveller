import React from 'react';
import "../SignUp.css";
import email_icon from "../../images/email.png";
import password_icon from "../../images/password.png";

const Login = () => {
    return (
        <div className='container'>
 <video src="/videos/ocean.mp4" autoPlay loop muted />
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Mail'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here</span></div>
            <div className="submit-container">
                <div className="submit">Login</div>
            </div>
        </div>
    );
};

export default Login;