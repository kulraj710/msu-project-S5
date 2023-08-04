// UserContext.js
'use client'
import React, { createContext, useState } from 'react';

export const Chat = createContext(null)

function ChatContext({ children }) {

  const [chatArray, setChatArray] = useState([])

    return (
      <Chat.Provider value={{chatArray, setChatArray}}>
        {children}
      </Chat.Provider>
    );
  }

  export default ChatContext