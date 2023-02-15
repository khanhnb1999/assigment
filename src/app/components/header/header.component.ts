import { Component, OnInit } from '@angular/core';

@Component({
       selector: 'app-header',
       templateUrl: './header.component.html',
       styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
       getUserLocal:any = localStorage.getItem('users')
       user:any = '';
       constructor() {

       }
       ngOnInit(): void {
             this.user = JSON.parse(this.getUserLocal)
       }

       logout() {
              localStorage.clear();
       }
}
