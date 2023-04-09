import { Clipboard } from 'phosphor-react';
import styles from './TodoBoard.module.css';

export function TodoBoard() {
  return (
    <div>
      <div className={styles.tasksInfo}>
        <div className={styles.createdTasks}>
          <strong>Tarefas Criadas</strong>
          <span className={styles.counter}>0</span>
        </div>
        <div className={styles.doneTasks}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>0</span>
        </div>
      </div>
      <div className={styles.tasksBoard}>
        <div className={styles.emptyMessage}>
          <Clipboard size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </div>
  );
}