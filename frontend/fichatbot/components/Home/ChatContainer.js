import React from 'react'
import styles from '../../styles/Home/ChatContainer.module.css'
import Chatbox from './Chatbox'
import { formatDate } from '../../Helper/formatDate'

const ChatContainer = ({chatArray}) => {
  return (
    <div className={styles.ChatContainer}>
      <div className={styles.messageList}>
      {chatArray.map((chat) => (
          <Chatbox key ={chat.id} positionBit={chat.sender} message={chat.message} time={formatDate(chat.time)}/>
        ))}
        </div>
    </div>
  )
}

export default ChatContainer
