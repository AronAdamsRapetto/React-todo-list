import { TodoBoard } from './components/TodoBoard';
import TodoLogo from './assets/TodoLogo.svg';
import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div className={styles.app}>
      <header>
        <img src={TodoLogo} alt="Logotipo"/>
      </header>

      <main>
        <TodoBoard />
      </main>
    </div>
  )
}

export default App
