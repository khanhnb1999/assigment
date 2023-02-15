import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
       selector: 'app-task',
       templateUrl: './task.component.html',
       styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
       projects:any = [];
       employees:any = [];
       tasks:any = [];
       getTaskValue:any = '';
       updateIntro =  {
              buttonUpdate: '',
              title: ''
       };
       constructor(
              private projectService: ProjectService,
              private employService:EmployeeService,
              private taskService:TaskService,
       ) {}
       ngOnInit(): void {
              this.getAllProject();
              this.getAllEmployee();
              this.getAllTask();
       }

       addTask(addTaskForm: NgForm) {
              if(!this.updateIntro.buttonUpdate) {
                     this.taskService.addTask(addTaskForm.value).subscribe((data) => {
                            this.getAllTask();
                     })
              } else {
                     if(addTaskForm.pristine) {
                            this.taskService.updateTask(this.getTaskValue._id, this.getTaskValue).subscribe((data) => {
                                   this.getAllTask();
                            })
                     } else {
                            this.taskService.updateTask(this.getTaskValue._id, addTaskForm.value).subscribe((data) => {
                                   this.getAllTask();
                            })
                     }
              }
       }

       getAllProject() {
              this.projectService.getAllProject().subscribe((data) => {
                     this.projects = data
              });
       };

       getAllEmployee() {
              this.employService.getAllEmployee().subscribe((data) => {
                     this.employees = data
              });
       };

       getAllTask() {
              this.taskService.getAllTask().subscribe((data) => {
                     this.tasks = data
              });
       };

       removeTask(id: number) {
              this.taskService.removeTask(id).subscribe((data) => {
                     this.getAllTask();
              })
       };

       createTask() {
              this.updateIntro = {
                     buttonUpdate: '',
                     title: ''
              };
              this.getTaskValue = ''
       }

       setValueTask(id: number) {
              this.updateIntro = {
                     buttonUpdate: 'button-update',
                     title: 'Cập nhật task'
              }
              this.taskService.getOneTask(id).subscribe((data) => {
                     this.getTaskValue = data;
              });
       };
       selectFollow() {
              this.getTaskValue.project = '';
              this.getTaskValue.employee = '';
              this.getTaskValue.priority = '';
       }
}
