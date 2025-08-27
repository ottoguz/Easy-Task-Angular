import { Component, Input } from '@angular/core';
import { ITask } from '../../../interfaces/task.interface';
import { CardComponent } from "../../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  constructor (
    private readonly tasksService: TasksService,
  ){}

  @Input({required: true})
  task!: ITask;

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
