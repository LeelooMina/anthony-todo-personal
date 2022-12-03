import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todos: Todo[] = []

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number) {

    this.todos.splice(index, 1)
  }





  //========================================

taskKey = 'tasks'



  // constructor() {

    // this.getAllTasks()

  // constructor(private http: HttpClient) {
    // this.serviceURL = 'http://localhost:3000/tasks';


  addTask(task : Todo) {

    let cache: Todo[] = [];

    if(this.getAllTasks() === null){
      cache.push(task);
    }else{
      cache = this.getAllTasks();
      cache.push(task);
    }

    localStorage.setItem(this.taskKey, JSON.stringify(cache))

    // return this.http.post<Task>(this.serviceURL,task);
  }


  getAllTasks(): Todo[]  {

    const cache = JSON.parse(localStorage.getItem(this.taskKey));

    // const allTasks = JSON.parse(cache)

    return cache

  }

  deleteTask(task : Todo) {

    let tasks = this.getAllTasks();

    // tasks.splice()

    // localStorage.removeItem(this.taskKey)


  }

  deleteTasks() {  // clears all tasks

    console.log(this.taskKey);
    localStorage.removeItem('tasks')
  }

}





//     const cache: Task [] = this.getAllTasks()

//     cache.splice(task)

//     localStorage.removeItem(this.taskKey)
//  }

  // editTask() {
  //   // return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  // }



 // serviceURL : string ;

  // serviceURL = 'https://codefi-todo-app-default-rtdb.firebaseio.com/';
  // serviceURL = 'https://ng-recipe-book-2f9da-default-rtdb.firebaseio.com/:null';
