import { Task } from '../models/task.model';
import { User } from '../models/user.model';

export type TasksState = {
  tasks: Task[],
  fetchLoading: boolean,
  fetchError: null | string,
  createLoading: boolean,
  createError: null | string
};

export type UsersState = {
  users: User[],
  fetchLoading: boolean,
  fetchError: null | string,
};

export type AppState = {
  tasks: TasksState,
  users: UsersState
};
