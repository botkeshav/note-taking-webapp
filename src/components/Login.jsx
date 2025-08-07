import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
function Login  () {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
    const res = await fetch("https://localhost:5001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const text = await res.text();
    console.log(text);
    
    alert(text);
  };

    return (
    <>
        <div className="container">  
        <form action="">
        <div className='logindiv'>
            <h1 className='loginh1'>Login</h1>

            <input type = "text" placeholder="Enter Username" id="usrname"></input>
            <br />
            
            <input type="password" placeholder="Enter Password" id='password'/>
            
            
            <button id = "login-btn" onClick={handleLogin}>Login </button>

           <hr className="login-separator" />         
            <span id="para">Don't have an account?</span>
            
            <button id = "reg-btn" onClick={() => navigate('/register')}>Register</button> 
        </div>
        </form>
        </div> 
    </>
);}
export default Login;