import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/interface/users';

@Injectable({
       providedIn: 'root',
})
export class UsersService {
       url = 'http://localhost:3002/api/';
       user:any = '';
       constructor(
              private userService: HttpClient
       ) {}

       login(user:IUser) {
              this.userService.post(this.url + 'sign-in', user).subscribe((data) => {
                     localStorage.setItem('users', JSON.stringify(data));
              })
       }

       getUserLocal() {
              this.user = localStorage.getItem('users');
              return JSON.parse(this.user);
       }
}
