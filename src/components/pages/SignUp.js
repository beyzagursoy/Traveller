import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import "../SignUp.css";
import user_icon from "../../images/person.png";
import email_icon from "../../images/email.png";
import password_icon from "../../images/password.png";

const SignUp = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        // Logic for signing up
        // After successful signup, redirect to login page
        navigate('/');
    };

    return (
        <div className='container'>
 <video src="/videos/ocean.mp4" autoPlay loop muted />
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Mail'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleSignUp}>Sign Up</div>
            </div>
            <div>
                <p>Already have an account? <Link to="/login">Log in</Link></p> {/* Add link to login page */}
            </div>
        </div>
   

    );
};

export default SignUp;
