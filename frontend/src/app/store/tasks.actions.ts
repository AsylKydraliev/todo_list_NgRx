import { createAction, props } from '@ngrx/store';
import { NewTaskData, StatusEditData, Task, UserEditData } from '../models/task.model';

export const fetchTasksRequest = createAction('[Tasks], Fetch Request');
export const fetchTasksSuccess = createAction('[Tasks], Fetch Success', props<{ tasks: Task[] }>());
export const fetchTasksFailure = createAction('[Tasks], Fetch Failure', props<{ error: string }>());

export const createTasksRequest = createAction('[Tasks], Create Request', props<{ taskData: NewTaskData }>());
export const createTasksSuccess = createAction('[Tasks], Create Success');
export const createTasksFailure = createAction('[Tasks], Create Failure', props<{ error: string }>());

export const removeTasksRequest = createAction('[Tasks], Remove Request', props<{ id: string }>());
export const removeTasksSuccess = createAction('[Tasks], Remove Success');
export const removeTasksFailure = createAction('[Tasks], Remove Failure', props<{ error: string }>());

export const editTasksRequest = createAction(
  '[Tasks], Edit Request',
  props<{ id: string, task: UserEditData | StatusEditData }>());
export const editTasksSuccess = createAction('[Tasks], Edit Success');
export const editTasksFailure = createAction('[Tasks], Edit Failure', props<{ error: string }>());


