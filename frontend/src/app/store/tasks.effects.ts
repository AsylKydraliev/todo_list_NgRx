import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../services/http.service';
import {
  createTasksFailure,
  createTasksRequest,
  createTasksSuccess, editTasksFailure, editTasksRequest, editTasksSuccess,
  fetchTasksFailure,
  fetchTasksRequest,
  fetchTasksSuccess, removeTasksFailure, removeTasksRequest, removeTasksSuccess
} from './tasks.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class TasksEffects {
  fetchTasks = createEffect(() => this.actions.pipe(
    ofType(fetchTasksRequest),
    mergeMap(() => this.httpService.getTasks().pipe(
      map(tasks => fetchTasksSuccess({tasks})),
      catchError(() => of(fetchTasksFailure({error: 'Something went wrong'})))
    ))
  ));

  createTask = createEffect(() => this.actions.pipe(
    ofType(createTasksRequest),
    mergeMap(({taskData}) => this.httpService.createTask(taskData).pipe(
      map(() => createTasksSuccess()),
      tap(() => this.router.navigate(['/'])),
      catchError(() => {
        return of(createTasksFailure({error: 'Wrong task data'}))
      })
    ))
  ));

  removeTask = createEffect(() => this.actions.pipe(
    ofType(removeTasksRequest),
    mergeMap(({id}) => this.httpService.removeTask(id).pipe(
      map(() => removeTasksSuccess()),
      catchError(() => {
        return of(removeTasksFailure({error: 'Something went wrong'}))
      })
    ))
  ));

  editTask = createEffect(() => this.actions.pipe(
    ofType(editTasksRequest),
    mergeMap(({id, task}) => this.httpService.editTask(id, task).pipe(
      map(() => editTasksSuccess()),
      catchError(() => {
        return of(editTasksFailure({error: 'Something went wrong'}))
      })
    ))
  ));

  constructor(
    private httpService: HttpService,
    private actions: Actions,
    private router: Router,
    ) {}
}
