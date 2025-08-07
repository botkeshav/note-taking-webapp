import '../css/Login.css';
import { useNavigate } from 'react-router-dom';


function Register()  {
    const navigate = useNavigate();
    return(
    <>
        <div className="container">  
        
        <form action="">

        <div className='logindiv'>
            <h1 className='loginh1'>Register</h1>

            <input type = "text" placeholder="Enter Username" id="usrname"></input>
            <br />
            {/* <br /> */}
            <input type="password" placeholder="Enter Password" id='password'/>
            {/* <br /> */}
            <br />
            <button id = "login-btn">Register </button>
            <hr className='login-separator'/>
            <span>
                Already have an account?
            </span>
            <button id = "reg-btn" onClick={() => navigate('/login')}>Login</button>


        </div>
        </form>
        </div>
    </>
);}
export default Register;