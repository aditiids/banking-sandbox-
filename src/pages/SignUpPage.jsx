// src/pages/SignUpPage.jsx
import React from 'react';
import '../styles/Auth.css';
import SignUpForm from '../components/SignUpForm';
import logo from '../assets/hsbc_logo.png';

const SignUpPage = () => {
  return (
    <div className="auth-page">
      <img src={logo} alt="HSBC Logo" className="auth-logo" />
      <div className="auth-box">
        <div className="switch-text">
          Have an Account ? <span onClick={() => window.location.href='/'}>Sign in</span>
        </div>
        <h3>Welcome to <span style={{ color: '#c5001a' }}>HSBC</span></h3>
        <h1>Sign up</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
