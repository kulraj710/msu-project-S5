import React from 'react'
import styles from '../../styles/Home/Sidebar.module.css'
import Image from 'next/image'
import Github from '../../public/icons/github.svg'
import Bot from '../../public/icons/bot.svg'
import Add from '../../public/icons/add.svg'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <div className={styles.headcontainer}>
      <div className={styles.heading1}>Finance AI chat</div>
      <div className={styles.supportingText}>Ask your finance questions</div>
        </div>

      <div className={styles.logo}>
      <Image src={Bot} width={50} height={50}/>
      </div>
      </section>

      <section className={styles.section2}>
        <div>
        <h5>New Conversation</h5>
        <span>2 messages</span>
        </div>
      </section>

      <section className={styles.section3}>
        <div className={styles.bottomFlexContainer}>
          <div>
          <Image src={Bot} width={30} height={30} className={styles.bottomImage1}/>
          <Image src={Github} width={25} height={25}/>
          </div>
        <div>
          <button className={styles.newButton}>
          <Image src={Add} width={20} height={20} className={styles.bottomImage1}/>

            <span>New Chat</span>
            </button>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Sidebar