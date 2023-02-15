import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { IProject } from 'src/interface/project';
import { UsersService } from 'src/app/services/users.service';

@Component({
       selector: 'app-project',
       templateUrl: './project.component.html',
       styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
       projects:any = [];
       author: any = '';
       getProjectValue:any = {
              id: '',
              name: '',
              team: '',
              startDate: ''
       };
       updateIntro =  {
              buttonUpdate: '',
              title: ''
       };

       constructor(
              private projectService: ProjectService,
              private userService: UsersService,
       ) {}

       ngOnInit(): void {
              this.getAllProject();
              this.author = this.userService.getUserLocal();
       }

       setValueProject(id: number) {
              this.updateIntro = {
                     buttonUpdate: 'button-update',
                     title: 'Cập nhật dự án'
              }
              this.projectService.getOneProject(id).subscribe((data) => {
                     this.getProjectValue = data;
              });
       }

       getAllProject() {
              this.projectService.getAllProject().subscribe((data) => {
                     console.log(data)
                     this.projects = data
              });
       };

       addProject(addProjectForm: NgForm) {
              if(!this.updateIntro.buttonUpdate) {
                     this.projectService.addProject(addProjectForm.value).subscribe((data) => {
                            this.getAllProject();
                     })
              } else {
                     if(addProjectForm.pristine) {
                            this.projectService.updateProject(this.getProjectValue._id, this.getProjectValue).subscribe((data) => {
                                   this.getAllProject();
                            })
                     } else {
                            this.projectService.updateProject(this.getProjectValue._id, addProjectForm.value).subscribe((data) => {
                                   this.getAllProject();
                            })
                     }
              }
              this.getAllProject();
       }

       removeProject(id: number) {
              this.projectService.removeProject(id).subscribe((data) => {
                     this.getAllProject();
              })
       };

       createProject() {
              if(this.author.author === 'employee') {
                     alert("Bạn không có quyền truy cập chức năng này !!!");
              } else {
                     this.updateIntro = {
                            buttonUpdate: '',
                            title: ''
                     };
                     this.getProjectValue = {}
              }
       }

}
