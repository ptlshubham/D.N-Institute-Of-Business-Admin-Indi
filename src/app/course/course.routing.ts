import { Routes } from '@angular/router';
import { BbaComponent } from './bba/bba.component';

export const CourseRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'bba',
        component: BbaComponent
    },
    ]
}];
