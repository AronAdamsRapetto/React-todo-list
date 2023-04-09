import { Dispatch, SetStateAction } from "react";
import { TaskInterface } from "./Task.interface";

export interface InputTaskInterface {
  newTaskText: string,
  setNewTaskText: Dispatch<SetStateAction<string>>,
  setTask: Dispatch<SetStateAction<TaskInterface[]>>
}