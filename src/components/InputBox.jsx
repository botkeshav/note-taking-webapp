// import '../css/InputBox.css'
import styles from '../css/InputBox.module.css'

import { useState } from 'react';

function InputBox() {
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")

  const handleNotes = async(e) => {
    e.preventDefault();

    try
    {
      const res = await fetch("http://localhost:3000/addNotes", {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ title, content: body }),
    });



    const data = await res.json()  //here was the error
    if ( data.success === true)
    {
      console.log("Notes added sucessfully")
    }
    else
    {
      console.log(data)
    }

    }
    catch(err)
    {
      console.error("Error",err); 
    }
  }

  return (
    // <div>InputBox</div>
    <>
  <div className="container">
        
       <input type="text" className= {styles.para} value ={title} onChange={e => setTitle(e.target.value)} placeholder='Notes Title' />
      {/* <h2>Hello User!</h2> */}
      <textarea className={styles.textarea} value = {body}  onChange={e => setBody(e.target.value)} placeholder="Type your Notes here"></textarea>
       <button className={styles.button} onClick={handleNotes}>Add</button> 
  </div>
    </>
  )
}


export default InputBox