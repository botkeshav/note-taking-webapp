import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Body.css';  // Import the CSS file
import '../css/Body.css'

function Body() {
  const navigate = useNavigate();

  return (
    <div className="body-container">
      <h1 className="body-heading">Note Taking WebApp</h1>
      <div
        className="auth-buttons"
        onMouseOver={e => (e.currentTarget.style.background = '#f8f9fa')}
        onMouseOut={e => (e.currentTarget.style.background = '#fff')}
      >
        <button className="auth-button" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="auth-button" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Body;
