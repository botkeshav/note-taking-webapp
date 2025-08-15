import '../css/SideBar.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SideBar() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logged Out Successfully");
    navigate('/login'); 
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:3000/notes", {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        });
        if (!res.ok)
        { 
          setNotes(["Can't Get the Notes"])
          throw new Error("Failed to fetch notes")

        };
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className='sidebar'>
      <h2>Your Notes</h2>
      <hr />
      <ul>
        {notes.map(note => (
          <li key={note._id}><button className="items">{note.title}</button> </li>
        ))}
      </ul>
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default SideBar;
