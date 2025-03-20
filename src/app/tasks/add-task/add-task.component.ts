import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() hideDialog = new EventEmitter();
  @Output() addTask = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onHideDrawer() {
    this.hideDialog.emit();
  }

  onFormSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      dueDate: this.enteredDate,
      summary: this.enteredSummary,
    });
  }
}
