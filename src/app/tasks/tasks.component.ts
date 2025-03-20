import { dummyTasks } from './../dummy-tasks';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  addTaskEnabled = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    const selectedTasks = this.tasks.filter(
      (task) => task.userId === this.userId
    );
    return selectedTasks;
  }

  onCompleteTask(taskId: string) {
    const updatedTasks = this.tasks.filter((task) => task.id !== taskId);
    this.tasks = updatedTasks;
  }

  onAddTask() {
    this.addTaskEnabled = true;
  }

  onHideAddTaskDialog() {
    this.addTaskEnabled = false;
  }

  onSubmitNewTask(newTask: NewTask) {
    this.addTaskEnabled = false;
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
  }
}
