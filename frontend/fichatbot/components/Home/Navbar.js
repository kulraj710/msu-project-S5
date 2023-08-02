import React,{useEffect, useState} from 'react'
import styles from "../../styles/Home/Navbar.module.css"
import { auth } from "../../firebase.js"
import Avatar from '@mui/material/Avatar'
import { signOut  } from "firebase/auth"
const Navbar = () => {

  const [currentUser, setCurrentUser] = useState(null)


  // useEffect(() => {
    
  // }, [])

function checkSession(){
  const user = auth.currentUser;
  if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      const uid = user.uid;
      console.log(user.email)
      setCurrentUser({ "name": displayName, "email" : email, "uid" : uid })
  }
  else{
    console.log("Hello")
  }
}

  const logoutHandler = () => {
    signOut(auth).then(() => {
      console.log("LOGGED OUT")
      setCurrentUser(null)
    }).catch((error) => {
      console.log("ERROR")
    });
    
  }
  return (
    <nav className={styles.navbar}>
      <div><h1>New Conversion</h1></div>
      <div>
        <ul>
          <li id='btn1'><p>{(currentUser) ? currentUser.email : "You are not signed in!"}</p></li>
          <li id='btn2'><button onClick={logoutHandler}>Logout</button></li>
          <li id='btn1'><button onClick={checkSession}>Check</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar