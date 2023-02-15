import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from 'src/interface/task';

@Injectable({
       providedIn: 'root',
})
export class TaskService {
       url = 'http://localhost:3002/api/';

       constructor( private httpService: HttpClient ) {};

       getOneTask(id: number) {
              return this.httpService.get(this.url + 'tasks/' + id);
       };

       getAllTask() {
              return this.httpService.get(this.url + 'tasks')
       };

       addTask( task: ITask) {
             return this.httpService.post(this.url + 'add-task', task)
       };

       updateTask(id: number, task: ITask) {
              return this.httpService.put(this.url + 'tasks/' + id, task)
       }

       removeTask(id: number){
              return this.httpService.delete(this.url + 'delete-task/' + id)
       };
}
