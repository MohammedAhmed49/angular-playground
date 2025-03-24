import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false,
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
