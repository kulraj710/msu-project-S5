import React,{useState} from "react";
import styles from "../../styles/Login/Login.module.css";
import GoogleLogin from "./GoogleLogin";
import EmailLogin from "./EmailLogin";
import DividorComponent from "../../layouts/DividorComponent";
import Image from "next/image";
import Logo from "../../public/full-logo.svg";
import Link from "next/link";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import LoginSection2 from "../Shared/LoginSection2";

const LoginSection = () => {
  const[values,setValues] =useState({
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
            <h1>Login</h1>
          </div>

          <div className={styles.googleLogin}>
            <GoogleLogin />
          </div>

          <div id={styles.dividor}>
            <DividorComponent>
              <p id={styles.lineText}>Or Login With Email</p>
            </DividorComponent>
          </div>

          <div id={styles.textFieldContainer}>
            <LoginForm values={values} setValues={setValues} errorMsg={errorMsg} setErrorMsg={setErrorMsg} setSubmitButtonDisabled={setSubmitButtonDisabled} submitButtonDisabled={submitButtonDisabled}/>
          </div>

          <div id={styles.forgotPassword}>
            <p id={styles.goToSignup}>
              <Link href="/signup">Don't have an account? Sign up</Link>
            </p>
            <ForgotPassword />
          </div>

          <div id={styles.loginButton}>
            <EmailLogin values={values} setValues={setValues} errorMsg={errorMsg} setErrorMsg={setErrorMsg} setSubmitButtonDisabled={setSubmitButtonDisabled} submitButtonDisabled={submitButtonDisabled}/>
          </div>
        </section>

        {/* second section */}
        <LoginSection2 />
      </main>
    </div>
  );
};

export default LoginSection;

// import React from "react";
// import styles from "../../styles/Login/Login.module.css";
// import GoogleLogin from "./GoogleLogin";
// import EmailLogin from "./EmailLogin";
// import DividorComponent from "../../layouts/DividorComponent";
// import Image from "next/image";
// import Logo from "../../public/full-logo.svg";
// import Link from 'next/link';
// import ForgotPassword from "./ForgotPassword";
// import LoginForm from "./LoginForm";
// import LoginSection2 from "../Shared/LoginSection2";

// const LoginSection: React.FC = () => {
//   return (
//     <div>
//       <main className={styles.container}>
//         <section className={styles.first}>
//           <div id={styles.logoContainer}>
//             <Image src={Logo} alt="logo" width={70} height={70} />
//           </div>

//           <div id={styles.welcome}>
//             <h1>Login</h1>
//           </div>

//           <div className={styles.googleLogin}>
//             <GoogleLogin />
//           </div>

//           <div id={styles.dividor}>
//             <DividorComponent>
//               <p id={styles.lineText}>Or Login With Email</p>
//             </DividorComponent>
//           </div>

//           <div id={styles.textFieldContainer}>
//             <LoginForm/>
//           </div>

//           <div id={styles.forgotPassword}>
//           <p id={styles.goToSignup}><Link href="/signup">Don't have an account? Sign up</Link></p>
//             <ForgotPassword />
//           </div>

//           <div id={styles.loginButton}>
//             <EmailLogin />
//           </div>
//         </section>

//         {/* second section */}
//         <LoginSection2/>
//       </main>
//     </div>
//   );
// };

// export default LoginSection;
