import React from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';

const EmailSignup = () => {
  return (
    <>
      <ButtonComponent
        fullWidth
        onClick={() => {
          alert('new account created');
        }}
        bgColor='#5271FF'
        variant="contained"
      >
        Create new account
      </ButtonComponent>
    </>
  );
};

export default EmailSignup;


// import React from 'react'
// import ButtonComponent from '../../layouts/ButtonComponent'

// const EmailSignup : React.FC = () => {
//   return (
//     <>
//         <ButtonComponent fullWidth  onClick={() => {alert('new account crated')}} bgColor='#5271FF' variant="contained">Create new account</ButtonComponent>
//     </>
//   )
// }

// export default EmailSignup