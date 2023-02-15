 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectComponent } from './components/project/project.component';
import { LoginComponent } from './components/login/login.component';
import { LeaderComponent } from './components/leader/leader.component';
import { ContentComponent } from './components/content/content.component';
import { TaskComponent } from './components/task/task.component';
@NgModule({
       declarations: [AppComponent, HeaderComponent, DashboardComponent, EmployeeComponent, ProjectComponent, LoginComponent, LeaderComponent, ContentComponent, TaskComponent],
       imports: [
              BrowserModule,
              NgbModule,
              BrowserAnimationsModule,
              MatSlideToggleModule,
              HttpClientModule,
              FormsModule,
              ReactiveFormsModule,
              AppRoutingModule
       ],
       providers: [],
       bootstrap: [AppComponent],
})


export class AppModule {}
