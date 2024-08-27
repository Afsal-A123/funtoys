import "./Login.css";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
export default function Login({visibile,setVisible})
{
  const [element,setelement]=useState("Login");
  const [undo,setundo] = useState("false");
  return (
    <div>
     { undo==="false"?
    <div className="snooplay-login-container">
     
    <div className="snooplay-login-box">

       <div className="close" onClick={()=>{setVisible(false)}}><CloseIcon/></div>

      <div className="snooplay-logo">
        
        <img src="https://snooplay.in/cdn/shop/files/Snooplay_logo_medium_1_220x.png?v=1659702830" alt="Spotify Logo" /> {/* Add your Spotify logo here */}
      </div>
      <h2>{element} in to Snooplay</h2>
      <div className="buttons">
      <div id={element==="Login"?"btnlogin":"btn"}></div>
        <button className="login" onClick={()=>{setelement("Login"); }}>Log In</button>
        <button className="login" onClick={()=>{setelement("Sign")}}>Sign Up</button>
      </div>
      <form>
      {element==="Login"?
        <div className="input-group">
          <label>Email or username</label>
          <input type="text" placeholder="Email or username" required />
          <p className="error-message">Please enter your Snooplay username or email address.</p>
        </div>
        :<div className="input-group">
        <div className="sign">
          <label>username</label>
          <input type="text" placeholder="Email or username" required />
        
          <p className="error-message">Please create your Snooplay username.</p>
          </div>
          <div className="sign">
          <label>Email</label>
          <input type="text" placeholder="Email or username" required />
          <p className="error-message">Please create your Snooplay email adress.</p>
          </div>
          <div className="sign">
          <label>Create Password</label>
          <input type="text" placeholder="Enter your password" required />
          <p className="error-message">Please create your Snooplay password.</p>
          </div>
          <div className="sign">
          <label>Confirm Password</label>
          <input type="text" placeholder="Enter your password again" required />
          <p className="error-message">Please confirm your Snooplay password.</p>
          </div>
          </div>}
          {element==="Login"?
          <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Password" required />
          <span className="show-password-icon">👁️</span> {/* Use an icon for show/hide password */}
        </div>:<div></div>}
        {element==="Login"?
        <div className="remember-me">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>:
        <div className="remember-me">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Confirm your Details</label>
        </div>}
        <button type="submit" className="login-btn">{element}</button>
      </form>
      {element==="Login"?
      <div className="forgot-password">
        <a href="#">Forgot your password?</a>
      </div>:<div></div>}
      {element==="Login"?
      <div className="social-login-buttons">
        <button className="social-login google" onClick={()=>{setVisible(false)}}>Continue with Google</button>
        
        <button className="social-login apple">Continue with Apple</button>
      </div>:<div></div>}
    </div>
  </div>:<div></div>}
  </div>
  );
}