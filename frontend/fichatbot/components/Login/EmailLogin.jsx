import React, {useContext} from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';
import {useRouter} from "next/router"

const EmailLogin = ({ values, setErrorMsg, submitButtonDisabled, setSubmitButtonDisabled, }) => {

  const router = useRouter()

  const loginHandler = async () => {
    if (!values.email || !values.pass) {
      setErrorMsg("fill all the fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((res) => {
        setSubmitButtonDisabled(false);
        router.push("/")
      })
      .catch((err) => {
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)
        console.log(err)
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
