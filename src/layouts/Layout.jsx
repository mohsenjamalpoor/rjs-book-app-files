import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Book App</h1>
        <p>Mohsenjamalpoor</p>
    </header>
    {children}
    <footer className={styles.footer}><p>Developed by Mohsen with ❤</p></footer>
    </>
  )
}

export default Layout