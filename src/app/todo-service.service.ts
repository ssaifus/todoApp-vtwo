import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
todolist = [
  {"No":1, "Task":"Assignment of CS1502"},
  {"No":2, "Task":"Buy groceries"},
  {"No":3, "Task":"Boil eggs"}
]

getlist(){
  return this.todolist;
}

addtolist: any
  constructor() { }
}