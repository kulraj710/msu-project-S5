import React from 'react'
import styles from '../../styles/Home/ChatContainer.module.css'
import Chatbox from './Chatbox'

const ChatContainer = ({chatArray}) => {
  return (
    <div className={styles.ChatContainer}>
      <div className={styles.messageList}>
      {chatArray.map((chat) => (
          <Chatbox key ={chat.id} positionBit={chat.sender} message={chat.message} time={chat.time}/>
        ))}
        </div>
    </div>
  )
}

export default ChatContainer
