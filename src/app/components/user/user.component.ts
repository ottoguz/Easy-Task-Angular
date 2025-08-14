import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../../../public/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser =  signal(DUMMY_USERS[randomIndex]);
  // USING COMPUTED SIGNALS(will be recomputed only when necessary)
  imagePath = computed(() => this.selectedUser().avatar);

  //STANDARD IMPLEMENTATION
  // get imagePath() {
  //   return this.selectedUser.avatar
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
