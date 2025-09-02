import { Component, Input } from '@angular/core';
import { ITask } from '../../../interfaces/task.interface';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
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
