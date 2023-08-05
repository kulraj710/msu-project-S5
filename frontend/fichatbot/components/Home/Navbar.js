import React, { useContext, useState } from 'react'
import styles from "../../styles/Home/Navbar.module.css"
import { auth } from "../../firebase.js"
import Avatar from '@mui/material/Avatar'
import { signOut } from "firebase/auth"
import { User } from '../../pages/_app'
import ButtonSecondary from '../../Layouts/ButtonSecondary'
import { useRouter } from 'next/router'
import Menu from '../../public/icons/menu.svg'
import Image from 'next/image'
import { MenuStyles } from '../../Context/MenuStylesContext.js'
import { useMediaQuery } from '@mui/material'

const Navbar = () => {

  const { menuStyles, setMenuStyles } = useContext(MenuStyles)

  const width768 = useMediaQuery("(max-width : 768px)")

  const router = useRouter()
  const { currentUser } = useContext(User)

  const handleMenu = () => {
    setMenuStyles(!menuStyles)
  }

  const logoutHandler = () => {
    signOut(auth).then(() => {
      router.push('/login')
    }).catch((error) => {
      alert("Something went wrong while logging out! Please refresh the page and try again!")
      console.error(err)
    })

  }
  return (
    <nav className={styles.navbar}>

      <div className={styles.MenuIcon} onClick={handleMenu}>
        <div style={{ "display": !width768 ? "none" : "block" }}>
          <Image src={Menu} width={30} height={30} alt='menu-icon' />
        </div>
        <h1>New Conversion</h1>
      </div>

      <div>
        <ul>

          <li id='btn1'>{
            (currentUser) ? <Avatar sx={{ bgcolor: "lightblue" }}>{currentUser.name[0]}</Avatar> : null}
          </li>
          <li id='btn2'>
            {(currentUser) ? <ButtonSecondary label={"Logout"} onClick={logoutHandler} /> : <ButtonSecondary label={"Login"} onClick={() => router.push("/login")} />}
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar