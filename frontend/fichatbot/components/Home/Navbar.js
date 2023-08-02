import React,{useEffect} from 'react'
import styles from "../../styles/Home/Navbar.module.css"
import { auth } from "../../firebase.js"

const Navbar = () => {
  const fetchUser = () => {
    const user = auth.currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const uid = user.uid;
        console.log("null")
        // return { "name": displayName, "email:": email, "Uid": uid }

    }
    else {
      console.log("null")
        // return null;
    }
}
  return (
    <nav className={styles.navbar}>
      <div><h1>New Conversion</h1></div>
      <div>
        <ul>
          <li id='btn1'><button onClick={fetchUser}>BTN1</button></li>
          <li id='btn2'><button>BTN2</button></li>
          <li id='btn1'><button>BTN3</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar