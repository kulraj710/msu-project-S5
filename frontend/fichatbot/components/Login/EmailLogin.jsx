import React from 'react';
import ButtonComponent from '../../layouts/ButtonComponent';

const EmailLogin = () => {
  return (
    <>
      <ButtonComponent fullWidth onClick={() => { alert('Login'); }} bgColor='#5271FF' variant="contained">Login</ButtonComponent>
    </>
  );
};

export default EmailLogin;
