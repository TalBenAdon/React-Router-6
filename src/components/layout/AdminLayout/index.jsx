import { Outlet } from 'react-router-dom'
import AdminNav from '../AdminNav'
import styles from './style.module.css'

function AdminLayout() {
  return (
    <div className={styles.container}>
      <AdminNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout