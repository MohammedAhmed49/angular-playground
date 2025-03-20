import { dummyTasks } from './../dummy-tasks';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks = dummyTasks;

  get selectedUserTasks() {
    console.log(this.tasks);

    const selectedTasks = this.tasks.filter(
      (task) => task.userId === this.userId
    );
    return selectedTasks;
  }

  onCompleteTask(taskId: string) {
    const updatedTasks = this.tasks.filter((task) => task.id !== taskId);
    this.tasks = updatedTasks;
  }
}
