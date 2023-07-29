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


// import React from 'react'
// import TextField from '@mui/material/TextField';

// interface Props{
//     label? : string,
//     id?  : string,
//     className? : string,
//     inputProps? : any,
//     placeholder? : string,
//     type? : string,
//     fullWidth? : boolean,
//     size? : any,
//     margin? : any,
//     autoComplete? : string,
// }

// const TextFieldComponent : React.FC<Props> = ({label, id, className, inputProps, placeholder, type, fullWidth, size, margin, autoComplete}) => {
//   return (
//     <>
//         <TextField label={label} id={id} className={className} placeholder={placeholder} type={type} fullWidth={fullWidth} inputProps={inputProps} size={size} margin={margin} autoComplete={autoComplete}/>
//     </>
//   )
// }

// export default TextFieldComponent