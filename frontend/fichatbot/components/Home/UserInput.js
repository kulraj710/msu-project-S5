import React, { useState, useContext } from 'react'
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from "../../styles/Home/Input.module.css"
import { Chat } from '../../Context/ChatContext';
import { User } from '../../pages/_app';
import { postData } from "../../Helper/api"
import { doc, arrayUnion, updateDoc } from "firebase/firestore"
import {db} from "../../firebase"
import { useRouter } from 'next/router';

const UserInput = () => {

    const localhost = true

    const router = useRouter()
    const { id } = router.query

    const { setChatArray } = useContext(Chat)
    const { currentUser } = useContext(User)
    
    const [userInput, setUserInput] = useState("")

    const updateFirestoreDbArray = async (userInput, backendOutput) => {
        const docRef = doc(db, `chatHistory/${currentUser.uid}/chat`, id)
        await updateDoc(docRef, {
            chatArray : arrayUnion(userInput, backendOutput)
        })
    }


    const submitHandler = async (e) => {
        e.preventDefault()

        const userInputObject = { 
            id: Math.floor(Math.random() * 100), 
            message: userInput, 
            time: new Date(), 
            sender: 0 
        }

        setChatArray((prev) => [...prev, userInputObject])

        setUserInput("")

        if (localhost) {
            const r = postData("http://127.0.0.1:5000/chat", { "req": userInput })
            r.then(async res => {
                
                const backendOutputObject = { 
                    id: Math.random() * 500, 
                    message: (res.res.response.length === [].length) ? "Sorry I do not have data for the mentioned stock or you did not mention any stock at all, please try again!" : "Here you go,", 
                    time: new Date(), 
                    sender: 1, 
                    display : res.res.display, 
                    displayData : res.res.response 
                }

                if (res.res.display === "Chart") {
                    setChatArray((prev) => [...prev, backendOutputObject])
                    
                    // update db
                    updateFirestoreDbArray(userInputObject, backendOutputObject)
                }
                
                else if (res.res.display === "Sheet"){
                    console.log(res.res.response)
                }
                else if (res.res.display === "News"){
                    console.log(res.res.response)
                    console.log(typeof(res.res.response))
                    setChatArray((prev) => [...prev, backendOutputObject])
                }
                else {
                    const backendOutputObject = { id: Math.random() * 500, message: res.res.response, time: new Date(), sender: 1, display : null }
                    setChatArray((prev) => [...prev, backendOutputObject])
                    
                    // update db
                    updateFirestoreDbArray(userInputObject, backendOutputObject)
                }
            }).catch((err) => {
                alert('Error', err)
                console.error(err)
            })
        }
    }


    return (
        <div className={styles.container}>
            <div>
                <form onSubmit={submitHandler}>
                    <OutlinedInput
                        // disabled
                        placeholder='Enter your prompt...'
                        value={userInput}
                        onChange={(e) => { setUserInput(e.target.value) }}
                        fullWidth
                        style={{ boxShadow: "0px 0px 1px 0px rgba(194,194,194,1)" }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type='submit'><SendIcon /></IconButton>
                            </InputAdornment>
                        }
                    />
                </form>
            </div>
        </div>
    )
}

export default UserInput
