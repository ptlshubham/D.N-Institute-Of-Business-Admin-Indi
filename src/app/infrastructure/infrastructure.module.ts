import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RouterModule } from '@angular/router';
import { InfrastructureRoutes } from './infrastructure.routing';
import { SharedModule } from '../shared/shared.module';
import { ActivitiesComponent } from './activities/activities.component';



@NgModule({
  declarations: [
    FacilitiesComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(InfrastructureRoutes),
    SharedModule
  ]
})
export class InfrastructureModule { }
