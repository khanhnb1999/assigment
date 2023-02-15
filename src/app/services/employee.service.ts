import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/interface/employee';

@Injectable({
       providedIn: 'root',
})

export class EmployeeService {
       url = 'http://localhost:3002/api/';

       constructor( private httpService: HttpClient ) {
       };

       getOneEmployee(id: number) {
              return this.httpService.get(this.url + 'employees/' + id);
       };

       getOneZone(id: number) {
              return this.httpService.get(this.url + 'zone/' + id);
       };

       getAllEmployee() {
              return this.httpService.get(this.url + 'employees')
       };

       getAllZones() {
              return this.httpService.get(this.url + 'zone')
       };

       addEmployee( employee: IEmployee) {
              return this.httpService.post(this.url + 'add-employee', employee)
       }

       updateEmployee(id: number, employee: IEmployee) {
              return this.httpService.put(this.url + 'update-employees/' + id, employee)
       }

       removeEmployee(id: number){
              return this.httpService.delete(this.url + 'delete-employees/' + id)
       };
}
