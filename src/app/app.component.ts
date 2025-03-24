import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

//USED FOR OLD NGFOR AND NGIF
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
