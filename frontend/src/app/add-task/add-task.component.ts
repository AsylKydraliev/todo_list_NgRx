import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/types';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { fetchUsersRequest } from '../store/users.actions';
import { NgForm } from '@angular/forms';
import { createTasksRequest } from '../store/tasks.actions';
import { NewTaskData } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  users: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.users = this.store.select(state => state.users.users)
  }

  ngOnInit(): void {
    this.store.dispatch(fetchUsersRequest());
  }

  onSend() {
    const taskData: NewTaskData = this.form.value;
    this.store.dispatch(createTasksRequest({taskData}));
  }
}
