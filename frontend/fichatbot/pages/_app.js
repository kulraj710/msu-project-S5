import React, { useState, useEffect, createContext } from 'react'
import '../styles/globals.css'
import ChatContext from '../Context/ChatContext'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import MenuStylesContext from '../Context/MenuStylesContext';
import ChartContext from '../Context/ChartContext';
import CurrentChatIdContext from '../Context/CurrentChatId';

export const User = createContext(null)

function MyApp({ Component, pageProps }) {

  const [currentUser, setCurrentUser] = useState(0)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName;
        const email = user.email;
        const uid = user.uid;
        setCurrentUser({ name: displayName, email: email, uid: uid });
      }
      else {
        setCurrentUser(null)
      }
      console.log("USE effect from _app.js ");
    })
  }, [])

  function UserContext({ children }) {
    return (
      <User.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </User.Provider>
    )
  }

  console.log(currentUser)

  return (
    <>
      <UserContext>
        <MenuStylesContext>
          <CurrentChatIdContext>
          <ChatContext>
            <ChartContext>
              {(currentUser === 0) ? "Loading..." : <Component {...pageProps} />}
            </ChartContext>
          </ChatContext>
          </CurrentChatIdContext>
        </MenuStylesContext>
      </UserContext>
    </>
  )
}

export default MyApp
