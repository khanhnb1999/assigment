import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectComponent } from './components/project/project.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskComponent } from './components/task/task.component';


const routes: Routes = [
       {path: '', component: DashboardComponent},
       {path: 'nhan-vien', component: EmployeeComponent},
       {path: 'du-an', component: ProjectComponent},
       {path: 'tao-task', component: TaskComponent},
];

@NgModule({
       imports: [RouterModule.forRoot(routes)],
       exports: [RouterModule],
})
export class AppRoutingModule {}
