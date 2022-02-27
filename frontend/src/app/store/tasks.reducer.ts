import { TasksState } from './types';
import { createReducer, on } from '@ngrx/store';
import { fetchTasksFailure, fetchTasksRequest, fetchTasksSuccess } from './tasks.actions';

const initialState: TasksState = {
  tasks: [],
  fetchLoading: false,
  fetchError: null
}

export const tasksReducer = createReducer(
  initialState,
  on(fetchTasksRequest, state => ({...state, fetchLoading: true})),
  on(fetchTasksSuccess, (state, {tasks}) => ({...state, fetchLoading: false, tasks})),
  on(fetchTasksFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
);
