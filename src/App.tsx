import { TodoBoard } from './components/TodoBoard';
import TodoLogo from './assets/TodoLogo.svg';
import { PlusCircle } from 'phosphor-react';
import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div className={styles.app}>
      <header>
        <img src={TodoLogo} alt="Logotipo"/>
      </header>
      <main>
        <div className={styles.inputBox}>
          <input type='text' placeholder='Adicione uma nova tarefa'/>
          <button type='button'>Criar <PlusCircle size={24} /></button>
        </div>
        <TodoBoard />
      </main>
    </div>
  )
}

export default App
