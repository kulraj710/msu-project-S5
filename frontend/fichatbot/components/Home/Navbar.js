import React from 'react'
import styles from "../../styles/Home/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div><h1>New Conversion</h1></div>
      <div>
        <ul>
          <li id='btn1'><button>BTN1</button></li>
          <li id='btn2'><button>BTN2</button></li>
          <li id='btn1'><button>BTN3</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar