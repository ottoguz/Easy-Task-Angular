import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { INewTask, ITask } from '../../interfaces/task.interface';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    NewTaskComponent
],
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

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: INewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date
    });
    this.isAddingTask = false;
  }

  
}
