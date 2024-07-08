import { Routes } from '@angular/router';
import { ENROLLMENT_ROUTES } from './components/enrollment/enrollment.routes';
import { COURSE_ROUTES } from './components/course/course.routes';
import { STUDENT_ROUTES } from './components/student/students.routes';
import { TEACHER_ROUTES } from './components/teacher/teacher.routes';
import { WeeklyPlannerComponent } from './components/weekly-planner/weekly-planner.component';
import { ADMIN_ROUTES } from './components/admin/admin.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login-menu',
    loadComponent: () =>
      import('./components/login-menu/login-menu.component').then(
        (m) => m.LoginMenuComponent
      ),
  },
  { path: '', children: COURSE_ROUTES },
  { path: '', children: ENROLLMENT_ROUTES },
  { path: '', children: STUDENT_ROUTES },
  { path: '', children: TEACHER_ROUTES },
  { path: '', children: ADMIN_ROUTES },
  { path: 'planner', component: WeeklyPlannerComponent },
];
