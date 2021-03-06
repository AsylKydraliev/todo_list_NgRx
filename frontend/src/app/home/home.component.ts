import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/types';
import { Observable } from 'rxjs';
import { StatusEditData, Task, UserEditData } from '../models/task.model';
import { editTasksRequest, fetchTasksRequest, removeTasksRequest } from '../store/tasks.actions';
import { User } from '../models/user.model';
import { fetchUsersRequest } from '../store/users.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  tasks: Observable<Task[]>;
  users: Observable<User[]>;
  loading: Observable<boolean>;
  removeLoading: Observable<boolean>;
  removeId = '';

  constructor(private store: Store<AppState>) {
    this.tasks = store.select(state => state.tasks.tasks);
    this.loading = store.select(state => state.tasks.fetchLoading);
    this.removeLoading = store.select(state => state.tasks.removeLoading);
    this.users = store.select(state => state.users.users);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchTasksRequest());
    this.store.dispatch(fetchUsersRequest());
  }

  onDelete(_id: string) {
    this.store.dispatch(removeTasksRequest({id: _id}));
  }

  onEdit(event: Event, _id: string, where: string) {
    this.removeId = _id;
    const selectValue = <HTMLSelectElement> event.target;
    const editTask = selectValue.value;

    const taskUser: UserEditData = {
      user: editTask,
    }

    const taskStatus: StatusEditData = {
      status: editTask,
    }

    if(where === 'user'){
      this.store.dispatch(editTasksRequest({id: _id, task: taskUser}));
    }
    if(where === 'status'){
      this.store.dispatch(editTasksRequest({id: _id, task: taskStatus}));
    }
  }
}
