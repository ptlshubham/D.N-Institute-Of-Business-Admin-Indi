import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { FacilitiesComponent } from './facilities/facilities.component';

export const InfrastructureRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'facilities',
        component: FacilitiesComponent
    },
    {
        path: 'activities',
        component: ActivitiesComponent
    },
]
}];