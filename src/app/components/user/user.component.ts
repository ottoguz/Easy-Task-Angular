import { 
  Component, 
  EventEmitter, 
  Input, 
  Output, 
} from '@angular/core';
import { DUMMY_USERS } from '../../../../public/dummy-users';
import { IUser } from '../../interfaces/user.interface';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  //STANDARD APPROACH
  @Input({required: true}) 
  user!: IUser;

  @Input({required: true})
  selected!: boolean;

  @Output()
  select = new EventEmitter<string>();

  get imagePath() {
    return this.user.avatar;
  }

  onSelectUser() {
    console.log(`User name: ${this.user.name}`);
    this.select.emit(this.user.id);
  }

  //SIGNAL APPROACH
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // //output function does not create a signal
  // select = output<string>();

  // imagePath = computed(() => this.avatar());

  // onSelectUser() {
  //   console.log(`User name: ${this.name()}`);
  //   this.select.emit(this.id());
  // }
}
