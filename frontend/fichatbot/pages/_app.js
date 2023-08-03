import React from 'react'
import '../styles/globals.css'
import UserContext from '../Context/CurrentUserContext'


function MyApp({ Component, pageProps }) {

  
  return (
  <>
    <UserContext>
        <Component {...pageProps} />
    </UserContext>
  </>
  )
}

export default MyApp
