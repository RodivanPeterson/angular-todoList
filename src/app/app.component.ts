import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { TaskInputComponent } from "./components/task-input/task-input.component";

@Component({
  selector: 'app-root',
  imports: [TaskInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-todoList';
}
