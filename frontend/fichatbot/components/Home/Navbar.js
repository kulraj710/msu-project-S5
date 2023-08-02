import React,{useEffect, useState} from 'react'
import styles from "../../styles/Home/Navbar.module.css"
import { auth } from "../../firebase.js"
import Avatar from '@mui/material/Avatar'
import { signOut, onAuthStateChanged   } from "firebase/auth"

const Navbar = () => {

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName;
        const email = user.email;
        const uid = user.uid;
        setCurrentUser({ "name": displayName, "email" : email, "uid" : uid })
      } 
    })
  }, [])

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
          {/* <li id='btn1'><p>{(currentUser) ? currentUser.email : "You are not signed in!"}</p></li> */}
          <li id='btn1'>{(currentUser) ? <Avatar sx={{ bgcolor: "lightblue" }}>{currentUser.name[0]}</Avatar> : "NOT LOGGED IN"}</li>
          <li id='btn2'><button onClick={logoutHandler}>Logout</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar