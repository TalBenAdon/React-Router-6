import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function MainNav() {

   // TODO - replace the Link to NavLink with a conditional className

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
               {/* TODO - show only to connected users */}
               <li className={styles.navItem}>
                  <NavLink to="/admin" className={({ isActive }) =>
                     isActive ? styles.active : ""
                  }>
                     Admin
                  </NavLink>
               </li>
               <li className={styles.navItem}>
                  {/* TODO - add conditional logout button instead if the user connected */}
                  <NavLink to="/login" className={({ isActive }) =>
                     isActive ? styles.active : ""
                  }>
                     Login
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default MainNav;
