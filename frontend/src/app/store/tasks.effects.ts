import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../services/http.service';
import { fetchTasksFailure, fetchTasksRequest, fetchTasksSuccess } from './tasks.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()

export class TasksEffects {
  fetchTasks = createEffect(() => this.actions.pipe(
    ofType(fetchTasksRequest),
    mergeMap(() => this.httpService.getTasks().pipe(
      map(tasks => fetchTasksSuccess({tasks})),
      catchError(() => of(fetchTasksFailure({error: 'Something went wrong'})))
    ))
  ));

  constructor(private httpService: HttpService, private actions: Actions) {}
}
