import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const fetchUsersRequest = createAction('[Users] Fetch Request');
export const fetchUsersSuccess = createAction('[Users] Fetch Success', props<{ users: User[] }>());
export const fetchUsersFailure = createAction('[Users] Fetch Failure', props<{ error: string }>());
