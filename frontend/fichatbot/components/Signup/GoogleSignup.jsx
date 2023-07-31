import React from 'react';
import styles from '../../styles/Login/Login.module.css';
import google from '../../public/google-logo.png';
import Image from 'next/image';
import ButtonComponent from '../../layouts/ButtonComponent';

const GoogleSignup = () => {
  return (
    <>
      <ButtonComponent
        onClick={() => alert('google')}
        variant="outlined"
        id={styles.googleButton}
      >
        <div id={styles.googleLogo}>
          <Image src={google} alt="google logo" width={40} height={40} />
        </div>
        <div id={styles.googleText}>Sign up with Google</div>
      </ButtonComponent>
    </>
  );
};

export default GoogleSignup;
