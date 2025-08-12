import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


function Register()  {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg,setmsg] = useState("");


    const handleRegister = async (e) => {

    e.preventDefault();

    try {
        const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

      const data = await res.json();
      setmsg(data.message)
      console.log(data); // log what backend sends
      if(data.success === true)
      navigate('/dashboard')
      else navigate('/register')

    } catch (err) {
      console.error("Login error:", err);
    }
    };



    return(
    <>
        <div className="container">  
        
        <form onSubmit={handleRegister}>

        <div className='logindiv'>
            <h1 className='loginh1'>Register</h1>
            {msg !== true && <p  style = {{ color: 'red', fontWeight: 'bold',fontSize:'20px' }}  >{msg}</p>}
            <input type = "text" placeholder="Enter Username" value={username} id="usrname" onChange={e => setUsername(e.target.value)} ></input>
            <br />
            <input type="password" value={password} placeholder="Enter Password" id='password' onChange={e => setPassword(e.target.value)}/>
            <br />
            <button id = "reg-btn">Register </button>
            <hr className='login-separator'/>
            <span>
                Already have an account?
            </span>
            <button id = "login-btn" type = "button" onClick={() => navigate('/login')}>Login</button>


        </div>
        </form>
        </div>
    </>
);}
export default Register;