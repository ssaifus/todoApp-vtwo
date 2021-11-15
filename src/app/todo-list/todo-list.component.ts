import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist : any = []
  constructor(private lst:TodoServiceService) { }

  ngOnInit(): void {
    this.todolist = this.lst.getlist()
  }

  

}