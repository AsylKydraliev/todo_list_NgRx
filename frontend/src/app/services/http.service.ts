import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from '../models/task.model';

@Injectable({providedIn: 'root'})

export class HttpService {
  constructor(private http: HttpClient) {}

  getTasks(){
    return this.http.get<Task[]>(environment.apiUrl + '/tasks').pipe(
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
}
