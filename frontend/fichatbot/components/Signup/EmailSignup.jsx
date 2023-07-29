import React from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { auth } from '../../firebase';

const EmailSignup = ({values,setValues,setErrorMsg,submitButtonDisabled,setSubmitButtonDisabled}) => {
  const [signUser, setSignUser] = React.useState(null)

  const SignUpHandler = () => {
    if(!values.name || !values.email || !values.pass || !values.c_pass){
      setErrorMsg("fill all the fields"); 
      return;
  }
  setErrorMsg("");

  setSubmitButtonDisabled(true);
  createUserWithEmailAndPassword(auth,values.email,values.pass).then(async (res)=>{
    const user=res.user 
    console.log(user)
    setSignUser(user.uid)
    await updateProfile(user,{
      displayName:values.name,
    })
    
    setSubmitButtonDisabled(false);
  }).catch((err)=>{
    setSubmitButtonDisabled(false)
    setErrorMsg(err.message)
  });
}
  return (
    <>
    <h1>Current user is : {signUser}</h1>
      <ButtonComponent
        fullWidth
        onClick={SignUpHandler}
        bgColor='#5271FF'
        variant="contained"
        disabled={submitButtonDisabled}
        
      >
        Create new account
      </ButtonComponent>

    </>
  );
  }
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