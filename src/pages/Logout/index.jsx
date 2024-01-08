import React, { useContext } from 'react'
import styles from './styles.module.css'
import { UserContext } from '../../context/UserProvider'
import { useNavigate } from 'react-router-dom'
export default function Logout() {
    const nav = useNavigate()
    const setUser = useContext(UserContext)[1]
    const handleLogout = () => {
        setUser(false)
        localStorage.removeItem('user')
        nav('/')
    }
    return (
        <div className={styles.logoutContanier}>

            <div className={styles.logoutBox}>

                <h1>Leaving?</h1>
                <button type="button" className={styles.button} onClick={handleLogout} >
                    Logout
                </button>
            </div>
        </div>
    )
}
