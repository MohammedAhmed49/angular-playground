import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TasksComponent, AddTaskComponent, TaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class TasksModule {}
