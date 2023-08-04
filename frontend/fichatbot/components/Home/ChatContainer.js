import React, {useContext} from 'react'
import styles from '../../styles/Home/ChatContainer.module.css'
import Chatbox from './Chatbox'
import { formatDate } from '../../Helper/formatDate'
import { Chat } from '../../Context/ChatContext';

const ChatContainer = () => {

  const {chatArray} = useContext(Chat)
  
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
