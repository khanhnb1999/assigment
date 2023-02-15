import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
       selector: 'app-employee',
       templateUrl: './employee.component.html',
       styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
       employees:any = [];
       zones:any = '';
       zoneName: any = '';
       getEmployeeValue:any = '';
       updateIntro =  {
              buttonUpdate: '',
              title: ''
       };

       constructor(
              private httpService: HttpClient,
              private employService:EmployeeService
       ) {}

       ngOnInit(): void {
              this.getAllEmployee()
              this.getAllZone()
       }

       setValueEmployee(id: number) {
              this.updateIntro = {
                     buttonUpdate: 'button-update',
                     title: 'Cập nhật nhân viên'
              }
              this.employService.getOneEmployee(id).subscribe((data) => {
                     this.getEmployeeValue = data;
                     this.employService.getOneZone(this.getEmployeeValue.zone).subscribe((data) => {
                            this.zoneName = data;
                     })
              });
       }

       getAllEmployee() {
              this.employService.getAllEmployee().subscribe((data) => {
                     this.employees = data
              });
       };


       getAllZone() {
              this.employService.getAllZones().subscribe((data) => {
                     this.zones = data
              });
       };

       addEmployee(addEmployeeForm: NgForm) {
              if(!this.updateIntro.buttonUpdate) {
                     this.employService.addEmployee(addEmployeeForm.value).subscribe((data) => {
                            this.getAllEmployee();
                     })
              } else {
                     if(this.getEmployeeValue && addEmployeeForm.pristine) {
                            this.employService.updateEmployee(this.getEmployeeValue._id, this.getEmployeeValue).subscribe((data) => {
                                   this.getAllEmployee();
                            })
                     } else {
                            this.employService.updateEmployee(this.getEmployeeValue._id, addEmployeeForm.value).subscribe((data) => {
                                   this.getAllEmployee();
                            })
                     }
              }
       }

       removeEmployee(id: number) {
              this.employService.removeEmployee(id).subscribe((data) => {
                     this.getAllEmployee();
              })
       };

       createEmployee() {
              this.updateIntro = {
                     buttonUpdate: '',
                     title: ''
              };
              this.getEmployeeValue = {}
       }

       selectedChoiceZone() {
              this.zoneName = '';
       }
}
