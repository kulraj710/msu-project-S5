import React from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';
import { useRouter } from "next/router"

const EmailLogin = ({ user, setUser, values, setErrorMsg, submitButtonDisabled, setSubmitButtonDisabled, }) => {

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
        setUser([res.user.uid, res.user.displayName, res.user.email])
        router.push("/")
        setSubmitButtonDisabled(false);
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
        disabled={submitButtonDisabled}
      >
        Login
      </ButtonComponent>
    </>
  );
}

export default EmailLogin;
