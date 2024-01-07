import AdminNav from '../AdminNav'
import styles from './style.module.css'

function AdminLayout() {
  return (
    <div className={styles.container}>
      <AdminNav />
      <main>
        {/* Add - the ***** to add the admin pages here */}
      </main>
    </div>
  )
}

export default AdminLayout