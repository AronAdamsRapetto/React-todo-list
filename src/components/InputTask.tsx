import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from "phosphor-react";
import styles from './InputTask.module.css';
import { InputTaskInterface } from "../interfaces/InputTask.interface";
import { ChangeEvent } from "react";

export function InputTask({ newTaskText, setNewTaskText, setTask }: InputTaskInterface) {

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(value);
  }

  const handleCreateTaskClick = () => {
    const newTask = {
      id: uuidv4(),
      task: newTaskText,
      isDone: false,
    };

    setTask((state) => [...state, newTask]);
  }

  return (
    <div className={styles.inputBox}>
      <input
        type='text' value={newTaskText}
        onChange={handleInputChange}
        placeholder='Adicione uma nova tarefa'
      />

      <button
        type='button'
        onClick={handleCreateTaskClick}
      >
        Criar <PlusCircle size={24} />
      </button>
    </div>
  );
}