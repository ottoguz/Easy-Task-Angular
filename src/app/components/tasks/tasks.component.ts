import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { ITask } from '../../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true})
  userId!: string;

  @Input({required: true})
  name!: string;

  tasks: ITask[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular from basic to advanced',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build first prototype of an online website',
      dueDate: '2024-05-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template',
      dueDate: '2024-06-15'
    }
  ]

  get owner() {
    return `${this.name}'s tasks`;
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
