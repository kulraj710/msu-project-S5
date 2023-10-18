// CurrentChatId.js
'use client'
import React, { createContext, useState } from 'react';

export const ChatId = createContext(null)

function CurrentChatIdContext({ children }) {

  const [currentChatId, setCurrentChatId] = useState("")

    return (
      <ChatId.Provider value={{currentChatId, setCurrentChatId}}>
        {children}
      </ChatId.Provider>
    );
  }

  export default CurrentChatIdContext