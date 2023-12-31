import React, { useContext, useEffect } from 'react'
import styles from '../../styles/Home/ChatContainer.module.css'
import Chatbox from './Chatbox'
import { formatDate } from '../../Helper/formatDate'
import { Chat } from '../../Context/ChatContext';
import ChartDisplay from '../Display/ChartDisplay';
import { db } from '../../firebase';
import { getDoc, doc } from "firebase/firestore"
import { useRouter } from 'next/router';
import { User } from '../../pages/_app';
import NewsList from '../Display/NewsList';
import Typing from '../Display/Typing';
import PortfolioV from '../Display/PortfolioV';

const ChatContainer = ({isAnswerLoading, setIsAnswerLoading}) => {

  const router = useRouter()
  const { id } = router.query

  const { setChatArray ,chatArray } = useContext(Chat)
  const { currentUser } = useContext(User)

  useEffect(() => {
    const temp = async () => {
      const docRef = doc(db, `chatHistory/${currentUser.uid}/chat`, id);
      const docSnap = await getDoc(docRef);
    
      // if its new chat chatHistory will be an empty array, we can compare it with 0 for it to be true-false accordingly
      if (docSnap.exists() && docSnap.data().chatArray != 0) {
      console.log("Document data:", docSnap.data())
      setChatArray(docSnap.data().chatArray)
      } else {
      // docSnap.data() will be undefined in this case
      // setChatArray([])
}
    }
    temp()
  }, [])
  
  return (
    <div className={styles.ChatContainer}>
      <div className={styles.messageList} >
        {chatArray.map((chat, index, chatArray) => (
          <>
           <Chatbox key={Math.random()} positionBit={chat.sender} message={chat.message} time={formatDate(chat.time)} />
            <div>
              {/* Rander chart here conditionaly - usestate typeof*/}
              {(chat.display !== null && chat.display === "Chart" && chat.displayData.length !== [].length) ? 
              <>
              <ChartDisplay dataFromReact={chat.displayData}/>
              </>
              : null}
          {(isAnswerLoading && index === chatArray.length - 1) ? <Chatbox positionBit={1} key={chat.id} message={<Typing/>} time={""}/> : null}

              {(chat.display !== null && chat.display === "News") ? <>
                <NewsList newsList={[chat.displayData]}/>
              </> : null}

              {(chat.display !== null && chat.display === "Portfolio") ? 
              <>
              <PortfolioV/>
              </> : null}
            </div>
          </>
        ))}
      </div>

    </div>
  )
}

export default ChatContainer
