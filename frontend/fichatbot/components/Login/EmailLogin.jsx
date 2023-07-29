import React from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase';
import Link from 'next/link';

const EmailLogin = ({values,setValues,setErrorMsg,submitButtonDisabled,setSubmitButtonDisabled}) => {
  const loginHandler=()=>{
    if(!values.email || !values.pass){
      setErrorMsg("fill all the fields"); 
      return;
  }
  setErrorMsg("");

  setSubmitButtonDisabled(true);
  signInWithEmailAndPassword(auth,values.email,values.pass).then(async (res)=>{
    setSubmitButtonDisabled(false);

  }).catch((err)=>{
    setSubmitButtonDisabled(false)
    setErrorMsg(err.message)
  });
  return (
    <>
      <ButtonComponent fullWidth onClick={loginHandler} bgColor='#5271FF' variant="contained" disabled={submitButtonDisabled}>Login</ButtonComponent>
      {/* <div>This is vishal</div> */}
    </>
  );
};
}

export default EmailLogin;

// import React from 'react'
// import ButtonComponent from '../../layouts/ButtonComponent'

// const EmailLogin : React.FC = () => {
//   return (
//     <>
//         <ButtonComponent fullWidth  onClick={() => {alert('Login')}} bgColor='#5271FF' variant="contained">Login</ButtonComponent>
//     </>
//   )
// }

// export default EmailLogin
