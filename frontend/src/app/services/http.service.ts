import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiTaskData, NewTaskData, Task } from '../models/task.model';
import { ApiUserData, User } from '../models/user.model';

@Injectable({providedIn: 'root'})

export class HttpService {
  constructor(private http: HttpClient) {}

  getTasks(){
    return this.http.get<ApiTaskData[]>(environment.apiUrl + '/tasks').pipe(
      map(response => {
        return response.map(tasks => {
          return new Task(
            tasks._id,
            tasks.user,
            tasks.text,
            tasks.status,
          );
        });
      })
    );
  };

  getUsers(){
    return this.http.get<ApiUserData[]>(environment.apiUrl + '/users').pipe(
      map(response => {
        return response.map(users => {
          return new User(
            users._id,
            users.name
          );
        });
      })
    );
  };

  createTask(task: NewTaskData){
   return this.http.post(environment.apiUrl + '/tasks', task);
  }
}
