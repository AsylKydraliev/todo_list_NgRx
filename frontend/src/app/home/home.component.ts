import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/types';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { fetchTasksRequest } from '../store/tasks.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  tasks: Observable<Task[]>;
  loading: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.tasks = store.select(state => state.tasks.tasks);
    this.loading = store.select(state => state.tasks.fetchLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchTasksRequest());
  }
}
