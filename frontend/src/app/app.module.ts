import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { tasksReducer } from './store/tasks.reducer';
import { TasksEffects } from './store/tasks.effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { usersReducer } from './store/users.reducer';
import { UsersEffects } from './store/users.effects';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    StoreModule.forRoot({tasks: tasksReducer, users: usersReducer}, {}),
    EffectsModule.forRoot([TasksEffects, UsersEffects]),
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
