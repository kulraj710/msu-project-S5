import React, { useState, useContext } from 'react'
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from "../../styles/Home/Input.module.css"
import { Chat } from '../../Context/ChatContext';
import { postData } from "../../Helper/api"

const UserInput = () => {

    const localhost = true
    const { setChatArray } = useContext(Chat)
    const [userInput, setUserInput] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        setChatArray((prev) => [...prev, { id: Math.floor(Math.random() * 100), message: userInput, time: new Date(), sender: 0 }])
        setUserInput("")

        if (localhost) {
            const r = postData("http://127.0.0.1:5000/chat", { "req": userInput })
            r.then(res => {
                console.log(res)
                // setChatArray((prev) => [...prev, { id: Math.random() * 10, message: res.res, time: new Date(), sender: 1 }])
            }).catch((err) => {
                alert('Error', err)
                console.log(err)
            })
        }
    }


    return (
        <div className={styles.container}>
            <div>
                <form onSubmit={submitHandler}>
                    <OutlinedInput
                        disabled
                        placeholder='input is disabled in Userinput.js:40'
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
