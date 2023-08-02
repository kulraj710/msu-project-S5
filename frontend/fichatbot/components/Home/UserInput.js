import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from "../../styles/Home/Input.module.css"
// import Divider from '@mui/material/Divider';

const UserInput = ({ chatArray, setChatArray }) => {

    const [userInput, setUserInput] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setChatArray([...chatArray, { id: 2, message: userInput, time: new Date(), sender: 0 }])
        setUserInput("")
    }

    return (
        <div className={styles.container}>
            <div>
                <form onSubmit={submitHandler}>
                    <OutlinedInput
                        placeholder='Enter text here'
                        value={userInput}
                    onChange={(e) => {setUserInput(e.target.value)}}
                        fullWidth
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type='submit'><SendIcon /></IconButton>
                            </InputAdornment>}
                    />
                </form>
            </div>
        </div>
    )
}

export default UserInput

