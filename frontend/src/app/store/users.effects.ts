import { HttpService } from '../services/http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from './users.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class UsersEffects {
  fetchUsers = createEffect(() => this.actions.pipe(
    ofType(fetchUsersRequest),
    mergeMap(() => this.httpService.getUsers().pipe(
      map(users => fetchUsersSuccess({users})),
      catchError(() => of(fetchUsersFailure({error: 'Something went wrong'})))
    ))
  ));

  constructor(private httpService: HttpService, private actions: Actions) {}
}
