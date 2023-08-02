import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldComponent = ({ label, id, className, inputProps, placeholder, type, fullWidth, size, margin, autoComplete,onChange }) => {
  return (
    <>
      <TextField
        label={label}
        id={id}
        className={className}
        placeholder={placeholder}
        type={type}
        fullWidth={fullWidth}
        inputProps={inputProps}
        size={size}
        margin={margin}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </>
  );
};

export default TextFieldComponent;


