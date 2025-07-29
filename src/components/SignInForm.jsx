// src/components/SignInForm.jsx
import React from 'react';

const SignInForm = () => {
  return (
    <form className="signin-form">
      <label>Email or Username</label>
      <input type="text" placeholder="Username or email address" />

      <label>Password</label>
      <input type="password" placeholder="Password" />

      <div className="switch-text">
        <span>Forgot Password</span>
      </div>

      <button type="submit">Sign in</button>
    </form>
  );
};

export default SignInForm;
