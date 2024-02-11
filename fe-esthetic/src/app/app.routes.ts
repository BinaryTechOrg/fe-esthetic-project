import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { SpecificClassComponent } from './pages/specific-class/specific-class.component';

export const routes: Routes = [
                                { path: '', component: HomeComponent },
                                { path: 'classes', component: ClassesComponent },
                                { path: 'specific-class/:id', component: SpecificClassComponent },
                                ];
