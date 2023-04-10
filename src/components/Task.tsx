import { Check, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { TaskProps } from '../interfaces/Task.interface';

export function Task({ task, isDone, id, setTasks }: TaskProps) {
  
  const handleClickStatusTask = () => {
    const changedTask = {
      id,
      task,
      isDone: !isDone
    }

    setTasks((state) => state.map((task) => {
      if (task.id === id) return changedTask
      return task
    }));
  }

  const handleClickDeleteTask = () => {
    setTasks(state => state.filter(({id: taskId}) => id !== taskId))
  }
  
  return (
    <div className={styles.task}>
      <div className={styles.taskView}>
        <div
          onClick={handleClickStatusTask}
          className={ isDone ? styles.checkedIcon : styles.uncheckedIcon}
        >
          { isDone ? <Check size={16} /> : <Circle size={24} /> }
        </div>

        <span
          className={isDone ? styles.checkedTask : styles.uncheckedTask}
        >
          { task }
        </span>
      </div>
      <button onClick={handleClickDeleteTask} className={styles.trashIcon}> 
        <Trash size={24} />
      </button>
    </div>
  );
}