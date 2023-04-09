import { PlusCircle } from "phosphor-react";
import styles from './InputTask.module.css';
import { InputTaskInterface } from "../interfaces/InputTask.interface";

export function InputTask({ newTaskText, setNewTaskText, setTask }: InputTaskInterface) {
  return (
    <div className={styles.inputBox}>
      <input type='text' placeholder='Adicione uma nova tarefa'/>
      <button type='button'>Criar <PlusCircle size={24} /></button>
    </div>
  );
}