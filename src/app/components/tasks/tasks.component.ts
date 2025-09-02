import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { ITask } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  constructor(
    private readonly tasksService: TasksService,
  ) {}

  @Input({required: true})
  userId!: string;

  @Input({required: true})
  name!: string;

  isAddingTask = false;
  tasks: ITask[] = [];

  get owner() {
    return `${this.name}'s tasks`;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
