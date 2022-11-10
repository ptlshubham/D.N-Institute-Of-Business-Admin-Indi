import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CourseRoutes } from './course.routing';
import { HomeModule } from '../home/home.module';
import { BbaComponent } from './bba/bba.component';



@NgModule({
  declarations: [
    BbaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    RouterModule.forChild(CourseRoutes)
  ]
})
export class CourseModule { }
