import React from 'react'
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const UserInput = () => {
    const styles = {
        "margin": "0 2rem"
    }
    return (
        <div style={styles}>
            <OutlinedInput
                placeholder='Enter text here'
                fullWidth
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton><SendIcon /></IconButton>
                    </InputAdornment>}
            />
        </div>
    )
}

export default UserInput
