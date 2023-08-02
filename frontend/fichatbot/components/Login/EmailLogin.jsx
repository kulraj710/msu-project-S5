import React from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase';

const EmailLogin = ({user, setUser, values,setErrorMsg,submitButtonDisabled,setSubmitButtonDisabled, }) => {

  const loginHandler = async () => {
    if(!values.email || !values.pass){
      setErrorMsg("fill all the fields"); 
      return;
    }
  setErrorMsg("");

  setSubmitButtonDisabled(true);

  signInWithEmailAndPassword(auth,values.email,values.pass)
    .then((res)=>{
    setSubmitButtonDisabled(false);
    console.log("login objetc" , res)
    setUser([res.user.uid, res.user.displayName, res.user.email])
    })
    .catch((err) => {
    setSubmitButtonDisabled(false)
    setErrorMsg(err.message)
    })
  
  }
  return (
    <>
      <ButtonComponent 
        fullWidth 
        onClick={loginHandler} 
        bgColor='#5271FF' 
        variant="contained" 
        disabled={submitButtonDisabled}>

        Login
      </ButtonComponent>
    </>
  );
  }

export default EmailLogin;
