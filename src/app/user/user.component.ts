import { Component, EventEmitter, Input, output, Output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();

  // select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onUserClick() {
    this.select.emit(this.user.id);
  }
}
