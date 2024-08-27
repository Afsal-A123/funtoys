import "./Login.css";
import { useState } from "react";
export default function Login()
{
  return (
    <div className="snooplay-login-container">
    <div className="snooplay-login-box">
      <div className="snooplay-logo">
        <img src="https://snooplay.in/cdn/shop/files/Snooplay_logo_medium_1_220x.png?v=1659702830" alt="Spotify Logo" /> {/* Add your Spotify logo here */}
      </div>
      <h2>Log in to Snooplay</h2>
      <hr />
      <form>
        <div className="input-group">
          <label>Email or username</label>
          <input type="text" placeholder="Email or username" required />
          <p className="error-message">Please enter your Snooplay username or email address.</p>
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Password" required />
          <span className="show-password-icon">👁️</span> {/* Use an icon for show/hide password */}
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="login-btn">Log In</button>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot your password?</a>
      </div>
      <div className="social-login-buttons">
        <button className="social-login google">Continue with Google</button>
        <button className="social-login facebook">Continue with Facebook</button>
        <button className="social-login apple">Continue with Apple</button>
      </div>
    </div>
  </div>
  );
}