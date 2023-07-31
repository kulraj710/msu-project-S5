import React from 'react'
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from "../../styles/Home/Input.module.css"
import Divider from '@mui/material/Divider';

const UserInput = () => {
    return (
        <div className={styles.container}>


            {/* <div className={styles.divider}>
                <Divider />
            </div> */}

            <div>

                <OutlinedInput
                    placeholder='Enter text here'
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton><SendIcon /></IconButton>
                        </InputAdornment>}
                />
            </div>
        </div>
    )
}

export default UserInput

