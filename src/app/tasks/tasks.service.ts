import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask, Task } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks;

  constructor() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.tasks = dummyTasks;
      localStorage.setItem('tasks', JSON.stringify(dummyTasks));
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task: Task) => task.userId === userId);
  }

  completeTask(taskId: string) {
    const updatedTasks = this.tasks.filter((task: Task) => task.id !== taskId);
    this.tasks = updatedTasks;
    this.saveTasks();
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
