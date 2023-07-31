import React from 'react';
import TextFieldComponent from '../../layouts/TextFieldComponent';
import styles from '../../styles/Login/Login.module.css';

const SignupForm = () => {
  return (
    <>
      <form>
        <div>
          <TextFieldComponent
            label="Full name"
            placeholder="Enter full name"
            fullWidth
            autoComplete='name'
          />
        </div>

        <div>
          <TextFieldComponent
            id={styles.textFieldEmail}
            label="Email"
            placeholder="Enter Email"
            fullWidth
            autoComplete='username'
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
          />
        </div>
      </form>
    </>
  );
};

export default SignupForm;
