import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter();

  // select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onUserClick() {
    this.select.emit(this.user.id);
  }
}
