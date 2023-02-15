import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
       selector: 'app-login',
       templateUrl: './login.component.html',
       styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
       constructor(
              private userService:UsersService
       ) {}
       ngOnInit(): void {
       }

       login(loginForm: NgForm) {
             this.userService.login(loginForm.value);
       }
}
