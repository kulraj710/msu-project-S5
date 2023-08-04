import React, {useContext, useEffect} from 'react'
import Navbar from './Navbar'
import UserInput from './UserInput'
import Content from './Content'
import styles from '../../styles/Home/ContentContainer.module.css'
import { Chat } from '../../Context/ChatContext'
import { User } from '../../pages/_app'
import Link from "next/link"

const ContentContainer = () => {

    const {setChatArray} = useContext(Chat)
    const {currentUser} = useContext(User)

    const loginString = () => (<>You are not logged in please,  <Link href="/login" style={{"color" : "blue", textDecoration : "underline"}}>Login</Link></>)
    const welcomeString = (name) => (<>Welcome {name}, <br/> How can I help you?</>)


    useEffect(() => {
        if (currentUser !== null) {
            setChatArray([{id : 1, message : welcomeString(currentUser.name), sender : 1}])      
        }
        else{
            setChatArray([{id : 1, message : loginString(), sender : 1}])      
        }
    }, [])
    

    return (
        <div className={styles.container}>
            <div>
                <Navbar />
            </div>
            <div className={styles.content}>
                <Content />
            </div>
            <div>
                <UserInput/>
            </div>

        </div>
    )
}

export default ContentContainer
