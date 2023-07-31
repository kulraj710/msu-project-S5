import React from 'react';
import graphic from '../../public/login-page.svg';
import styles from '../../styles/Login/Login.module.css';
import Image from 'next/image';

const LoginSection2 = () => {
  return (
    <section className={styles.second}>
      <div id="graphic">
        <Image src={graphic} alt="login graphic" width={600} height={400} />
      </div>
    </section>
  );
};

export default LoginSection2;
