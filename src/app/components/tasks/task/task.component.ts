import { Component, Input } from '@angular/core';
import { ITask } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true})
  task!: ITask

}
