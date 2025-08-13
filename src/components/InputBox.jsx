// import '../css/InputBox.css'
import styles from '../css/InputBox.module.css'
function InputBox() {
  return (
    // <div>InputBox</div>
    <>
  <div className="container">
        
       <input type="text" className= {styles.para} placeholder='Notes Title' />
      {/* <h2>Hello User!</h2> */}
      <textarea className={styles.textarea} placeholder="Type your Notes here"></textarea>
       <button className={styles.button}>Add</button> 
  </div>
    </>
  )
}

export default InputBox