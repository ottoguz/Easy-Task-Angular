import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output()
  cancel = new EventEmitter<void>();

  @Output()
  add = new EventEmitter<INewTask>();

  //STANDARD APPROACH
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //SIGNAL APPROACH
  //enteredTitle = signal('');
  //enteredSummary = signal('');
  //enteredDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle, 
      summary: this.enteredSummary, 
      date: this.enteredDate
    });
  }
}
