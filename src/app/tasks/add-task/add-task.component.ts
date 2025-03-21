import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() hideDialog = new EventEmitter();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TasksService);
  onHideDrawer() {
    this.hideDialog.emit();
  }

  onFormSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        dueDate: this.enteredDate,
        summary: this.enteredSummary,
      },
      this.userId
    );
    this.hideDialog.emit();
  }
}
