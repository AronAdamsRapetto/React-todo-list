import { Dispatch, SetStateAction } from "react";

export interface TaskInterface {
  task: string,
  isDone: boolean,
  id: string,
};

export interface TaskProps extends TaskInterface {
  setTasks: Dispatch<SetStateAction<TaskInterface[]>>
}