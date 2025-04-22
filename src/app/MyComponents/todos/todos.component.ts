import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
import { title } from 'process';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos : Todo[];
  constructor(){
    this.todos = [{
      sno: 1,
      title: "This is title",
      desc: "Description",
      active: true
    },
    {
      sno: 2,
      title: "This is title",
      desc: "Description",
      active: true
    },
    {
      sno: 3,
      title: "This is title",
      desc: "Description",
      active: true
    },
  ]
  }
  ngOnInit(): void {
      
  }

}
