import React from 'react';
import './style.css'; // Assuming the CSS file exists

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-4 rounded shadow-sm w-25 loginForm">
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              id="email" // Added id attribute to match the label
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              id="password" // Added id attribute to match the label
              name="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="tick" // Added id attribute for proper association with label
              name="tick"
              className="form-check-input" // Added appropriate class for styling
            />
            {/* Corrected label association and text */}
            <label className="form-check-label" htmlFor="tick">
              Accept Terms and Conditions
            </label>
          </div>
          <button className="btn btn-success w-100 rounded-0">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
