import React,{useState} from 'react';
import TextFieldComponent from '../../layouts/TextFieldComponent';
import styles from '../../styles/Login/Login.module.css';

const SignupForm = ({values,setValues,errorMsg,setErrorMsg,submitButtonDisabled,setSubmitButtonDisabled}) => {

  return (
    <>
      <form>
        <div>
          <TextFieldComponent
            label="Full name"
            placeholder="Enter full name"
            fullWidth
            autoComplete='name'
            onChange={event=>setValues(prev=>({...prev,name:event.target.value}))}

          />
        </div>

        <div>
          <TextFieldComponent
            id={styles.textFieldEmail}
            label="Email"
            placeholder="Enter Email"
            fullWidth
            autoComplete='username'
            onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}
          />
        </div>

        <div>
          <TextFieldComponent
            className={styles.textFieldPassword}
            label="Password"
            type="password"
            placeholder="Enter Password"
            fullWidth
            autoComplete='current-password'
            onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}
          />
        </div>

        <div>
          <TextFieldComponent
            className={styles.textFieldPassword}
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            fullWidth
            autoComplete='current-password'
            onChange={event=>setValues(prev=>({...prev,c_pass:event.target.value}))}
          />
        </div>
        <b className={styles.error}><center>{errorMsg}</center></b>
      </form>
    </>
  );
};

export default SignupForm;
