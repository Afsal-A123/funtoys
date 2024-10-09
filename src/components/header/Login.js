import "./Login.css";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
export default function Login({visibile,setStatus,setVisible})
{
  const [element,setelement]=useState("Login");
  const [undo,setUndo] = useState("false");
  const [email,setEmail]=useState('');
  const[pass,setPass]=useState('');
  const [cpass,setCpass]=useState('');
  const [data,setData]=useState([]);
  const [message,setMessage]=useState([]);

  useEffect(()=>{
    localStorage.setItem("loginStatus",false);
    axios.get("http://localhost:8000/user")
    .then(result => { setData(result.data); })
    .catch(err => console.log(err));
  },[]);

  function Login(){
    let l_email = email;
      let l_pass = pass;
      if (l_email.length !== 0 && l_pass !== 0) {
       

        if (data.length !== 0) {
          let found = false;
          data.map((value) => {
            if (value.email === l_email) {
              found = true;
              if (value.password !== l_pass) {
                console.log("Incorrect password");
              }
              else {

                
                localStorage.setItem("loginStatus",true);
                console.log(localStorage.getItem("loginStatus"));

                console.log("success...");
                setVisible(false);
                setStatus(true);

              }
            }
            
          })
          if (!found) {
            console.log("User not found...");
            setMessage("User not found...")
          }
        }
      }

  }

  function Signup(){
    if (data.length !== 0) {
     
      const obj = data.find(item => item.email === email);
      if (obj===undefined) {
        axios.post("http://localhost:8000/user",
          {
            email:email,
            password:pass
          }
        ).then((res)=>{
          console.log(res);
          console.log("Signup Successful..");
          setVisible(false);
        })
        .catch((err)=>console.log(err));
      }
      else{
        setMessage("User already exist...")
        console.log("User already exist...");
      }
    }
  }
  function handleLogin(e) {
    e.preventDefault();

    if (element === 'Login') {

      Login();
    }
    else {

      
        Signup();
      }


    

  }
  
  
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
      <form name="Login-Form">
      {element==="Login"?
        <div className="input-group">
          <label>Email or username</label>
          <input type={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email or username" required />
        </div>
        :<div className="input-group">
        
          <div className="sign">
          <label>Email</label>
          <input type={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email or username" required />
          
          </div>
          <div className="sign">
          <label>Create Password</label>
          <input type={pass} placeholder="Enter your password" required onChange={(e)=>{ setPass(e.target.value)}} />
          
          </div>
          <div className="sign">
          <label>Confirm Password</label>
          <input type={cpass} placeholder="Enter your password again" onChange={(e)=>{ setCpass(e.target.value)}}required  />
         
          </div>
          </div>}
          {element==="Login"?
          <div className="input-group">
          <label>Password</label>
          <input type={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Password" required />
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
        <button onClick={(e)=>{ handleLogin(e) }} className="login-btn">{element}</button>
        <p className="error-message">{message}</p>
      </form>
      {element==="Login"?
      <div className="forgot-password">
        <a href="#">Forgot your password?</a>
      </div>:<div></div>}
      {element==="Login"?
      <div className="social-login-buttons">
        <button className="social-login google" onClick={()=>{ setVisible(false)}} > Continue with Google</button>
        
        <button className="social-login apple">Continue with Apple</button>
      </div>:<div></div>}
    </div>
  </div>:<div></div>}
  </div>
  );
}