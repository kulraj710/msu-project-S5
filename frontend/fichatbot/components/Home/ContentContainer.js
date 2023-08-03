import React from 'react'
import Navbar from './Navbar'
import UserInput from './UserInput'
import Content from './Content'
import styles from '../../styles/Home/ContentContainer.module.css'

const ContentContainer = () => {

  const [chatArray, setChatArray] = React.useState([{id : 1, message : "How can I help you?", time : new Date(), sender : 1}])

    return (
        <div className={styles.container}>
            <div>
                <Navbar />
            </div>
            <div className={styles.content}>
                <Content  chatArray={chatArray} setChatArray={setChatArray}/>
            </div>
            <div>
                <UserInput setChatArray={setChatArray}  chatArray={chatArray}/>
            </div>

        </div>
    )
}

export default ContentContainer
