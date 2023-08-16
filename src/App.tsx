import { Outlet } from 'react-router-dom';
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.tittle}>
        <h1>Github Finder</h1>
        <img src='https://github.githubassets.com/favicons/favicon-dark.png' alt='Logo Github' />
      </div>
      <Outlet />
    </div>
  )
}

export default App;
