import { Task } from '../models/task.model';

export type TasksState = {
  tasks: Task[],
  fetchLoading: boolean,
  fetchError: null | string,
};

export type AppState = {
  tasks: TasksState
}
