import { TasksState } from './types';
import { createReducer, on } from '@ngrx/store';
import {
  createTasksFailure,
  createTasksRequest,
  createTasksSuccess, editTasksFailure, editTasksRequest, editTasksSuccess,
  fetchTasksFailure,
  fetchTasksRequest,
  fetchTasksSuccess, removeTasksFailure, removeTasksRequest, removeTasksSuccess
} from './tasks.actions';

const initialState: TasksState = {
  tasks: [],
  fetchLoading: false,
  fetchError: null,
  createLoading: false,
  createError: null,
  removeLoading: false,
  removeError: null,
  editLoading: false,
  editError: null
}

export const tasksReducer = createReducer(
  initialState,
  on(fetchTasksRequest, state => ({...state, fetchLoading: true})),
  on(fetchTasksSuccess, (state, {tasks}) => ({...state, fetchLoading: false, tasks})),
  on(fetchTasksFailure, (state, {error}) => ({...state, fetchLoading: false, fetchError: error})),

  on(createTasksRequest, state => ({...state, createLoading: true})),
  on(createTasksSuccess, state => ({...state, createLoading: false})),
  on(createTasksFailure, (state, {error}) => ({...state, createLoading: false, createError: error})),

  on(removeTasksRequest, (state, {id}) => {
    const updateTasks = state.tasks.filter(task => {
      return task._id !== id;
    });

    return {...state, tasks: updateTasks, removeLoading: true}
  }),
  on(removeTasksSuccess, state => ({...state, removeLoading: false})),
  on(removeTasksFailure, (state, {error}) => ({...state, removeLoading: true, fetchError: error})),

  on(editTasksRequest, state => ({...state, editLoading: true})),
  on(editTasksSuccess, state => ({...state, editLoading: false})),
  on(editTasksFailure, (state, {error}) => ({...state, editLoading: false, fetchError: error})),
);
