// UserContext.js
'use client'
import React, { createContext, useState } from 'react';

export const User = createContext(null)

function UserContext({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [iaAuthLoaded, setIsAuthLoaded] = useState(false)
    // const CachedObj = useMemo(() => ({currentUser, setCurrentUser}), []); // value is cached by useMemo

    return (
      <User.Provider value={{currentUser, setCurrentUser, iaAuthLoaded, setIsAuthLoaded}}>
        {children}
      </User.Provider>
    );
  }

  export default UserContext