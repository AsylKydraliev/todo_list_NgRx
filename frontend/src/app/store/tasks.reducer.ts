import { TasksState } from './types';
import { createReducer, on } from '@ngrx/store';
import {
  createTasksFailure,
  createTasksRequest,
  createTasksSuccess,
  fetchTasksFailure,
  fetchTasksRequest,
  fetchTasksSuccess
} from './tasks.actions';

const initialState: TasksState = {
  tasks: [],
  fetchLoading: false,
  fetchError: null,
  createLoading: false,
  createError: null
}

export const tasksReducer = createReducer(
  initialState,
  on(fetchTasksRequest, state => ({...state, fetchLoading: true})),
  on(fetchTasksSuccess, (state, {tasks}) => ({...state, fetchLoading: false, tasks})),
  on(fetchTasksFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),
  on(createTasksRequest, state => ({...state, createLoading: true})),
  on(createTasksSuccess, state => ({...state, createLoading: false})),
  on(createTasksFailure, (state, {error}) => ({...state, createLoading: false, createError: error})),
);
