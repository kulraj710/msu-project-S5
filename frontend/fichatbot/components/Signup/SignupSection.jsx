import React,{useState} from 'react';
import styles from '../../styles/Login/Login.module.css';
import Link from 'next/link';
import DividorComponent from '../../layouts/DividorComponent';
import Image from 'next/image';
import Logo from '../../public/full-logo.svg';
import LoginSection2 from '../Shared/LoginSection2';
import SignupForm from './Signupform';
import GoogleSignup from './GoogleSignup';
import EmailSignup from './EmailSignup';

const SignupSection = () => {

  const[values,setValues] =useState({
    name:"",
    email: "",
    pass:"",
    c_pass: "",
})

  const [errorMsg,setErrorMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false);
  return (
    <div>
      <main className={styles.container}>
        <section className={styles.first}>
          <div id={styles.logoContainer}>
            <Image src={Logo} alt="logo" width={70} height={70} />
          </div>

          <div id={styles.welcome}>
            <h1>Sign Up</h1>
          </div>

          <div className={styles.googleLogin}>
            <GoogleSignup />
          </div>

          <div id={styles.dividor}>
            <DividorComponent>
              <p id={styles.lineText}>Or Register With Email</p>
            </DividorComponent>
          </div>

          <div id={styles.textFieldContainer}>
            <SignupForm values={values} setValues={setValues} errorMsg={errorMsg} setErrorMsg={setErrorMsg} setSubmitButtonDisabled={setSubmitButtonDisabled} submitButtonDisabled={submitButtonDisabled}/>
          </div>

          <div id={styles.changeForm}>
            <p>
              <Link href="/login">Already have an account?</Link>
            </p>
          </div>

          <div id={styles.loginButton}>
            <EmailSignup  values={values} setValues={setValues} errorMsg={errorMsg} setErrorMsg={setErrorMsg} setSubmitButtonDisabled={setSubmitButtonDisabled} submitButtonDisabled={submitButtonDisabled}/>
          </div>
        </section>

        {/* second section */}
        <LoginSection2 />
      </main>
    </div>
  );
};

export default SignupSection;
