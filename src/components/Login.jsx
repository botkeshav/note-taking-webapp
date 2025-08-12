import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
function Login  () {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg,setmsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Very very very Important
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      setmsg(data.message)

      console.log(data); // log what backend sends
      if(data.success === true)
      navigate('/dashboard')
      else navigate('/login')

    } catch (err) {
      console.error("Login error:", err);
    }
  };

    return (
    <>
        <div className="container">  
        <form onSubmit={handleLogin}>
        <div className='logindiv'>
            <h1 className='loginh1'>Login</h1>
            {msg !== true && <p  style = {{ color: 'red', fontWeight: 'bold', fontSize:'20px'}} >{msg}</p>}
            <input type = "text" placeholder="Enter Username" value={username} id="usrname" onChange={e => setUsername(e.target.value)} ></input>
            <br />
            
            <input type="password" value={password} placeholder="Enter Password" id='password' onChange={e => setPassword(e.target.value)}/>
            
            
            <button id = "login-btn" type = "submit">Login </button>

           <hr className="login-separator" />         
            <span id="para">Don't have an account?</span>
            <button id = "reg-btn" type = "button" onClick={() =>navigate('/register')}>Register</button> 
            
        </div>
        </form>
        </div> 
    </>
);}
export default Login;