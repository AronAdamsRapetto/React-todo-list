import { Check, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { TaskInterface } from '../interfaces/Task.interface';

export function Task(props: TaskInterface) {

  return (
    <div className={styles.task}>
      <div className={styles.uncheckedIcon}>
        {/* <Check size={16} /> */}
        <Circle size={24} />
      </div>
      <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <button className={styles.trashIcon}> 
        <Trash size={24} />
      </button>
    </div>
  );
}