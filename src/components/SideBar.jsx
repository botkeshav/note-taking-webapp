import '../css/SideBar.css';
import { useNavigate } from 'react-router-dom';


function SideBar() {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  console.log("Logged Out Sucessfully");
  navigate('/login'); 
};



  return (
    <>
    
    <div className='sidebar'>

        
    <h2>Your
      Notes
    </h2>
    <hr />

    

    <button className='logout' onClick={handleLogout} >Logout</button>
    </div>
    </>
  )
}

export default SideBar;