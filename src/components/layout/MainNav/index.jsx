import React, { useContext } from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../context/UserProvider';

function MainNav() {

   const user = useContext(UserContext)[0]

   return (
      <header className={styles.header}>
         <h1>Lion Store</h1>
         <nav>
            <ul className={styles.nav}>
               <li className={styles.navItem}>
                  <NavLink to="/" className={({ isActive }) =>
                     isActive ? styles.active : ""
                  }>
                     Home
                  </NavLink>
               </li>

               {user ? <li className={styles.navItem}>
                  <NavLink to="/admin" className={({ isActive }) =>
                     isActive ? styles.active : ""
                  }>
                     Admin
                  </NavLink>
               </li> : ''}

               <li className={styles.navItem}>

                  {user ? <NavLink to="/logout" className={({ isActive }) => isActive ? styles.active : ''}>Logout</NavLink> : <NavLink to="/login" className={({ isActive }) =>
                     isActive ? styles.active : ""
                  }>
                     Login
                  </NavLink>}

               </li>
            </ul>
         </nav>
      </header>
   );
}

export default MainNav;
