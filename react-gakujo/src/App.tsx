import styles from "./App.module.css";
import WindowSwitcher from './components/WindowSwitcher';

function App() {
  return (
    <div className={styles.main_div}>
      <WindowSwitcher />
    </div >
  )
}

export default App
