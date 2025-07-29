// src/components/SignUpForm.jsx
import React from 'react';

const SignUpForm = () => {
  return (
    <form className="signin-form">
      <label>Email or Username</label>
      <input type="text" placeholder="Username or email address" />

      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1 }}>
          <label>User name</label>
          <input type="text" placeholder="User name" />
        </div>
        <div style={{ flex: 1 }}>
          <label>Contact Number</label>
          <input type="text" placeholder="Contact Number" />
        </div>
      </div>

      <label>Password</label>
      <input type="password" placeholder="Password" />

      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUpForm;
