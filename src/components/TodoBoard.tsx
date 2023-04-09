import { useState } from 'react';
import { InputTask } from './InputTask';
import { Task } from './Task';
import { Clipboard } from 'phosphor-react';
import styles from './TodoBoard.module.css';
import { TaskInterface } from '../interfaces/Task.interface';

export function TodoBoard() {
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  const isTaskListEmpty = tasks.length === 0;
  const createdTasks = tasks.length;
  const doneTasks = tasks.reduce((acc, { isDone }): number => {
    if (isDone) return acc += 1
    return acc
  }, 0);
  
  return (
    <div>
      <InputTask
        newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
        setTask={setTasks}
      />

      <div className={styles.tasksInfo}>
        <div className={styles.createdTasks}>
          <strong>Tarefas Criadas</strong>
          <span className={styles.counter}>{createdTasks}</span>
        </div>

        <div className={styles.doneTasks}>
          <strong>Concluídas</strong>
          <span className={styles.counter}>
            { isTaskListEmpty ? 0 : `${doneTasks} de ${createdTasks}` }
          </span>
        </div>
      </div>
      
      <div className={styles.tasksBoard}>
        {
          isTaskListEmpty ? (
            <div className={styles.emptyMessage}>
              <Clipboard size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          ) : tasks.map(({ task, isDone }) => (
            <Task task={task} isDone={isDone} key={task} />
          ))
        }
      </div>
    </div>
  );
}