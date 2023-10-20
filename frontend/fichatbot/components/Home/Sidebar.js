import React, { useState, useContext, useEffect } from 'react'
import styles from '../../styles/Home/Sidebar.module.css'
import Image from 'next/image'
import Github from '../../public/icons/github.svg'
import Add from '../../public/icons/add.svg'
import Logo from "../../public/full-logo.svg";
import { MenuStyles } from '../../Context/MenuStylesContext.jsx'
import SidebarConversationBox from './SidebarConversationBox'
import { useRouter } from 'next/router';
import { collection, addDoc, Timestamp, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../../firebase'
import { ChatId } from '../../Context/CurrentChatId'
import { User } from '../../pages/_app'

const Sidebar = () => {

  const { setCurrentChatId } = useContext(ChatId)
  const { currentUser } = useContext(User)

  const router = useRouter()
  const [addConversation, setAddConversation] = useState([])

  useEffect(() => {
    if (currentUser) {

      const collectionRef = collection(db, `chatHistory/${currentUser.uid}/chat`);
      const q = query(collectionRef, orderBy("date", "desc"))

      getDocs(q)
        .then((querySnapshot) => {
          let arr = []
          querySnapshot.forEach((doc) => {
            arr.push({date : doc.data().date, id : doc.id})
            // You can access other metadata like doc.ref, doc.createTime, etc.
          });
          setAddConversation(arr)
        })
        .catch((error) => {
          console.error('Error getting documents:', error);
        })
    }
  }, [])


  const { width768, showSidebar } = useContext(MenuStyles)

  const handleNewConversation = async () => {
    const newChatRef = await addDoc((collection(db, `chatHistory/${currentUser.uid}/chat`)), {
      chatArray: [],
      date: Timestamp.now()
    })
    setCurrentChatId(newChatRef.id)
    router.push(`/?id=${newChatRef.id}`)
  }

  const showMenuStyles = {
    "display": (!width768 && showSidebar) ? "none" : "block",
    // "position" : (!showSidebar) ? "absolute" : "static",
  }

  return (
    <div className={styles.container} style={showMenuStyles}>
      <section className={styles.section1}>
        <div className={styles.headcontainer}>
          <div className={styles.heading1}>Finance AI chat</div>
          <div className={styles.supportingText}>Ask your finance questions</div>
        </div>

        <div className={styles.logo}>
          <Image src={Logo} width={50} height={50} alt="logo-icon" />
        </div>
      </section>

      <section className={styles.section2Container}>
        {
          addConversation.map(((each, index) => (
            <div key={each}>
              <SidebarConversationBox style={styles.section2} id={each} index={index+1}/>
            </div>
          )))
        }
      </section>


      <section className={styles.section3} style={showMenuStyles}>
        <div className={styles.bottomFlexContainer}>
          <div>
            <Image alt='Bot' src={Logo} width={30} height={30} className={styles.bottomImage1} />
            <Image alt='github logo' src={Github} width={25} height={25} />
          </div>
          <div>
            <button className={styles.newButton} onClick={handleNewConversation}>
              <Image alt='logo' src={Add} width={20} height={20} className={styles.bottomImage1} />
              <span>New Chat</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sidebar