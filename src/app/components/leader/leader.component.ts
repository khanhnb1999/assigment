import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
       selector: 'app-leader',
       templateUrl: './leader.component.html',
       styleUrls: ['./leader.component.css'],
})
export class LeaderComponent implements OnInit {
       employees:any = [];
       getUserLocal:any = localStorage.getItem('users')
       user:any = '';
       constructor(
              private employService:EmployeeService
       ) {

       }
       ngOnInit(): void {
             this.user = JSON.parse(this.getUserLocal)
             this.getAllEmployee()
       }

       logout() {
              localStorage.clear();
       }

       getAllEmployee() {
              this.employService.getAllEmployee().subscribe((data) => {
                     this.employees = data
              });
       };
}
