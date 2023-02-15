import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from 'src/interface/project';

@Injectable({
       providedIn: 'root',
})
export class ProjectService {
       url = 'http://localhost:3002/api/';

       constructor( private httpService: HttpClient ) {};

       getOneProject(id: number) {
              return this.httpService.get(this.url + 'projects/' + id);
       };

       getAllProject() {
              return this.httpService.get(this.url + 'projects')
       };

       addProject( project: IProject) {
             return this.httpService.post(this.url + 'add-project', project)
       };

       updateProject(id: number, project: IProject) {
              return this.httpService.put(this.url + 'projects/' + id, project)
       }

       removeProject(id: number){
              return this.httpService.delete(this.url + 'delete-project/' + id)
       };

}
