import React from 'react'
import styles from '../../styles/Home/ChatContainer.module.css'

const Chatbox = ({positionBit, message, time, loading=false}) => {
  return (
    <section style={{'marginLeft' : (positionBit === 1) ? 'none' : 'auto'}} className={styles.message}>
        {(loading) 
            ? 
            <p> Loading...</p> 
            :
            <>
                <p> {message}</p>
                <span className={styles.time}>{time.toString()}</span>
            </>
        }
    </section>
  )
}

export default Chatbox