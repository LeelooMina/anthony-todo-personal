import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { EditModalComponent } from '../edit-modal/edit-modal.component'

Injectable({
  providedIn: 'root',
});

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  key:any

  todoArr: Todo[];  // similar to myBooks[]

  public addTaskValue: string = '';

  showValidationErrors: boolean

  constructor(private todoService: TodoService,  private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todoArr = this.todoService.getAllTasks();
   }


  addTodo(form: NgForm) {

    let thisTask: Todo = {
      text: form.value.text,
      completed: false
    }

    this.todoService.addTask(thisTask)

    console.log(thisTask)

    form.reset()
    this.todoArr = this.todoService.getAllTasks();

    }

  deleteTodo(todo: Todo) {
    const index = this.todoArr.indexOf(todo)
    this.todoService.deleteTodo(index)
  }



  editTodo(todo: Todo) {
    const index = this.todoArr.indexOf(todo)

    let dialogRef = this.dialog.open(EditModalComponent, {
      width: '700px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.todoService.updateTodo(index, result)
      }
    })
  }


  deleteAll(){
    this.todoService.deleteTasks();
    this.todoArr = this.todoService.getAllTasks();
  }
  // console.log(idx)
  // deleteTasks() {   // clear all tasks


  //   this.taskService.deleteTasks(new Task(this.addTaskValue))
  //   this.taskArr = this.taskService.getAllTasks();
  // }

  // editTask(idx: number, editTask: Task) {

  //   this.todoArr[idx] = editTask

  //   this.todoArr.slice();


  //   //  this.taskService.editTask(this.editTaskValue)
  //   // this.editTaskValue()
  //   //array.index of
  // }

}





//   addDetails() {
//     // this.taskObj.description = this.addTaskValue;
//     // // NOTE: Task service is being re-written.
//     // this.taskService.addTask(this.taskObj).subscribe(
//     //   (res) => {
//     //     this.ngOnInit();
//     //     this.addTaskValue = '';
//     //   },
//     //   (err) => {
//     //     alert(err);
//     //   }
//     // );
//   }

//   call(etask : Task) {
//     this.taskObj = etask;
//     this.editTaskValue = etask.name;
//   }   this.ngOnInit();
//     //     this.addTaskValue = '';
//     //   },
//     //   (err) => {
//     //     alert(err);
//     //   }
//     // );
//   }


//   // NOTE: Enter key press to form submit should be handled using default browser form behaviors.
//   handleKeyUp(e) {
//     if (e.keyCode === 13) {
//       this.handleSubmit(e);
//     }
//   }
// }

//   handleSubmit(e) {
//     // e.preventDefault();
//     // this.taskObj.name = this.addTaskValue;
//     // // NOTE: Task service is being re-written.
//     // this.taskService.addTask(this.taskObj).subscribe(
//     //   (res) => {
//     //
// // throw new Error('Method not Implimented')

  // editTaskValue : string = '';
 // taskObj : Task = new Task();
  // taskArr  = this.getAllTask();
  // btnInsert = document.getElementById("btnInsert")



    // getTasks() {
    //   return this.taskArr.slice();
    // }

    // getTask(idx: number) {
    //   return this.getTasks()[idx];
    // }
