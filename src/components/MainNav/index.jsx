import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

function MainNav() {

   // TODO - replace the Link to NavLink with a conditional className
   
   return (
      <header className={styles.header}>
         <h1>Lion Store</h1>
         <nav>
            <ul className={styles.nav}>
               <li className={styles.navItem}>
                  <Link to="/" className={''}>
                     Home
                  </Link>
               </li>
                  {/* TODO - show only to connected users */}
               <li className={styles.navItem}>
                  <Link to="/admin" className={''}>
                     Admin
                  </Link>
               </li>
               <li className={styles.navItem}>
                  {/* TODO - add conditional logout button instead if the user connected */}
                  <Link to="/login" className={''}>
                     Login
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default MainNav;
