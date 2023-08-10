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
                console.log(res.res)
                if (typeof (res.res) === typeof ({})) {
                    setChatArray((prev) => [...prev, { id: Math.random() * 500, message: "Displaying chart", time: new Date(), sender: 1 }])
                }
                else {
                    setChatArray((prev) => [...prev, { id: Math.random() * 500, message: res.res, time: new Date(), sender: 1 }])
                }
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
                        placeholder='Enter text here'
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
