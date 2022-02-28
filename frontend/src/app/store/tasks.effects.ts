import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../services/http.service';
import {
  createTasksFailure,
  createTasksRequest,
  createTasksSuccess,
  fetchTasksFailure,
  fetchTasksRequest,
  fetchTasksSuccess
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
  ))

  constructor(
    private httpService: HttpService,
    private actions: Actions,
    private router: Router,
    ) {}
}
