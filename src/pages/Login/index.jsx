import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { UserContext } from '../../context/UserProvider';

function Login() {
   const [formInfo, setFormInfo] = useState({ firstName: '', password: '' })
   const navigate = useNavigate()
   const setUser = useContext(UserContext)[1]

   const handleLogin = (e) => {
      e.preventDefault()
      // TODO -
      // Add your authentication logic here
      setUser(formInfo)

      localStorage.user = JSON.stringify(formInfo)


      navigate('/')
   };

   const handleChange = e => setFormInfo(old => ({ ...old, [e.target.name]: e.target.value }))
   return (
      <div className={styles.loginContainer}>
         <form onSubmit={handleLogin} className={styles.loginForm}>
            <h1>login page</h1>
            <div className={styles.formGroup}>
               <label htmlFor="username" className={styles.label}>
                  Username:
               </label>
               <input
                  type="text"
                  id="username"
                  name='firstName'
                  value={formInfo.firstName}
                  onChange={handleChange}
               />
            </div>
            <div className={styles.formGroup}>
               <label htmlFor="password" className={styles.label}>
                  Password:
               </label>
               <input
                  name='password'
                  type="password"
                  id="password"
                  value={formInfo.password}
                  onChange={handleChange}
               />
            </div>
            <button type="button" className={styles.button} onClick={handleLogin}>
               Login
            </button>
         </form>
      </div>
   );
}

export default Login;
