// src/pages/SignInPage.jsx
import React from 'react';
import '../styles/Auth.css';
import SignInForm from '../components/SignInForm';
import logo from '../assets/hsbc_logo.png';

const SignInPage = () => {
  return (
    <div className="auth-page">
      <img src={logo} alt="HSBC Logo" className="auth-logo" />
      <div className="auth-box">
        <div className="switch-text">
          No Account ? <span onClick={() => window.location.href='/signup'}>Sign up</span>
        </div>
        <h3>Welcome to <span style={{ color: '#c5001a' }}>HSBC</span></h3>
        <h1>Sign in</h1>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
