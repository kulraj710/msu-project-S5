import React from 'react'
import styles from '../../styles/Home/ChatContainer.module.css'

const Chatbox = ({ positionBit, message, time, loading = false }) => {

  const sty = {
    'marginLeft': (positionBit === 1) ? 'none' : 'auto',
    'backgroundColor': (positionBit === 1) ? '#0000000d' : '#E7F8FF'
  }

  return (
    <section style={sty} className={styles.message}>
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