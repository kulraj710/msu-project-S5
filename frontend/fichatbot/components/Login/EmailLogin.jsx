import React, {useContext} from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase';
import { User } from '../../Context/UserContext';

const EmailLogin = ({ values, setErrorMsg, submitButtonDisabled, setSubmitButtonDisabled, }) => {

  const {currentUser, setCurrentUser} = useContext(User)

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
        setCurrentUser({"uid" : res.user.uid, "name" : res.user.displayName, "name" : res.user.email})
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
