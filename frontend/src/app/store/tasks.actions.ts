import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const fetchTasksRequest = createAction('[Tasks], Fetch Request');
export const fetchTasksSuccess = createAction('[Tasks], Fetch Success', props<{tasks: Task[]}>());
export const fetchTasksFailure = createAction('[Tasks], Fetch Failure', props<{error: string}>());
