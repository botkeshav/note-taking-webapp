import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
function Login  () {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg,setmsg] = useState("");
    const [loading,setloading] = useState(false);

  const handleLogin = async (e) => {
    setloading(true) // Making it true so, that it shows GIF just after clicking 
    e.preventDefault(); // Very very very Important
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      // setloading(data.message)
      setmsg(data.message)

      console.log(data); // log what backend sends
      if(data.success === true)
      navigate('/dashboard')
      else navigate('/login')

    } catch (err) {
      console.error("Login error:", err);
    }finally{
      setloading(false)
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
            
            
            {/* <button id = "login-btn" type = "submit" onClick={()=> setloading(true)}>Login </button>
            {loading  && <img src="./loadingGIF.gif" style={{ width: '50px', height: '50px', verticalAlign: 'middle' }}  alt="Ruk ja bsdk" />  } */}
            {!loading ? ( <button id="login-btn" type="submit" onClick={handleLogin}>Login</button>) : (<img 
              src="./loadingGIF.gif" 
              alt="Ruk Ja bsdk" 
              style={{ width: '100px', height: '100px' }} 
            />
            )}
           <hr className="login-separator" />         
            <span id="para">Don't have an account?</span>
            <button id = "reg-btn" type = "button" onClick={() =>navigate('/register')}>Register</button> 
            
        </div>
        </form>
        </div> 
    </>
);}
export default Login;