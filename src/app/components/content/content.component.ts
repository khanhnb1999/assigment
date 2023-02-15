import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
       selector: 'app-content',
       templateUrl: './content.component.html',
       styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
       zones: any = [];

       constructor(
              private zoneService:EmployeeService
       ) {}

       ngOnInit(): void {
              this.getAllZone()
       }

       getAllZone() {
              this.zoneService.getAllZones().subscribe((data) => {
                     this.zones = data
              });
       };
}
