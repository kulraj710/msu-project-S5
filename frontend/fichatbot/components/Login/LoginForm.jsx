import React from 'react';
import TextFieldComponent from '../../layouts/TextFieldComponent';
import styles from '../../styles/Login/Login.module.css';

const LoginForm = ({values,setValues,errorMsg,setErrorMsg,submitButtonDisabled,setSubmitButtonDisabled}) => {
  return (
    <>
      <form>
        <div>
          <TextFieldComponent
            id={styles.textFieldEmail}
            label="Email"
            placeholder="Enter Email"
            fullWidth
            autoComplete='username'
            onChange={event=>setValues((prev)=>({...prev,email:event.target.value}))}
          />
        </div>

        <div>
          <TextFieldComponent
            id={styles.textFieldPassword}
            label="Password"
            type="password"
            placeholder="Enter Password"
            fullWidth
            autoComplete='current-password'
            onChange={event=>setValues((prev)=>({...prev,pass:event.target.value}))}
          />
        </div>
        <b className={styles.error}><center>{errorMsg}</center></b>
      </form>
    </>
  );
};

export default LoginForm;

// import React from 'react'
// import TextFieldComponent from "../../layouts/TextFieldComponent";
// import styles from "../../styles/Login/Login.module.css";

// const LoginForm : React.FC = () => {
//   return (
//     <>
//     <form>
//         <div>
//               <TextFieldComponent
//                 id={styles.textFieldEmail}
//                 label="Email"
//                 placeholder="Enter Email"
//                 fullWidth
//                 autoComplete='username'
//               />
//             </div>

//             <div>
//               <TextFieldComponent
//                 id={styles.textFieldPassword}
//                 label="Password"
//                 type="password"
//                 placeholder="Enter Password"
//                 fullWidth
//                 autoComplete='current-password'
//               />
//             </div>
//     </form>
//     </>
//   )
// }

// export default LoginForm
