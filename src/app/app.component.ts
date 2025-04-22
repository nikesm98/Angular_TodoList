import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TodosComponent]
})
export class AppComponent {
  title = 'cwh-todo-list';
  // constructor(){
  //   setTimeout(() => {
  //     this.title = "TODO List"
  //   }, 2000);
  // }


}
