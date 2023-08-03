import React, { useContext } from 'react'
import styles from "../../styles/Home/Navbar.module.css"
import { auth } from "../../firebase.js"
import Avatar from '@mui/material/Avatar'
import { signOut } from "firebase/auth"
import { User } from '../../Context/CurrentUserContext'
import Loader from '../../Layouts/Loader'
import ButtonSecondary from '../../Layouts/ButtonSecondary'
import {useRouter} from 'next/router'

const Navbar = () => {

  const router = useRouter()
  const {currentUser, setCurrentUser} = useContext(User)




  const logoutHandler = () => {
    signOut(auth).then(() => {
      console.log("LOGGED OUT")
      setCurrentUser(null)
    }).catch((error) => {
      alert("Something went wrong while logging out! Please refresh the page and try again!")
    })
    
  }
  return (
    <nav className={styles.navbar}>
      <div><h1>New Conversion</h1></div>
      <div>
        <ul>
      
          <li id='btn1'>{
            (currentUser) ? <Avatar sx={{ bgcolor: "lightblue" }}>{currentUser.name[0]}</Avatar> : null}
          </li>
          <li id='btn2'>
            {(currentUser ) ? <ButtonSecondary label={"Logout"} onClick={logoutHandler} /> : <ButtonSecondary label={"Login"} onClick={() => router.push("/login")}/> }
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar