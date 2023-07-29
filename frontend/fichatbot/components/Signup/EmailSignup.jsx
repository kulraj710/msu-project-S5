import React from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { auth } from '../../firebase';
import Link from 'next/link';

const EmailSignup = ({values,setValues,setErrorMsg,submitButtonDisabled,setSubmitButtonDisabled}) => {
  const SignUpHandler=()=>{
    if(!values.name || !values.email || !values.pass || !values.c_pass){
      setErrorMsg("fill all the fields"); 
      return;
  }
  setErrorMsg("");

  setSubmitButtonDisabled(true);
  createUserWithEmailAndPassword(auth,values.email,values.pass).then(async (res)=>{
    const user=res.user 
    console.log(user)
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
      <ButtonComponent
        fullWidth
        onClick={SignUpHandler}
        bgColor='#5271FF'
        variant="contained"
        disabled={submitButtonDisabled}
        
      >
        <Link href={'/'}>
        Create new account
        </Link>
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