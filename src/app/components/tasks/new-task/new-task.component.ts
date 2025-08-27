import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../../../interfaces/task.interface';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  constructor (
    private readonly tasksService: TasksService,
  ){}

  @Input({required: true})
  userId!: string;

  @Output()
  close = new EventEmitter<void>();

  //STANDARD APPROACH
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //SIGNAL APPROACH
  //enteredTitle = signal('');
  //enteredSummary = signal('');
  //enteredDate = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle, 
      summary: this.enteredSummary, 
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
