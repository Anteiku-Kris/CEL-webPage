import { Routes } from '@angular/router';
import { ENROLLMENT_ROUTES } from './components/enrollment/enrollment.routes';
import { COURSE_ROUTES } from './components/course/course.routes';
import { STUDENT_ROUTES } from './components/student/students.routes';
import { TEACHER_ROUTES } from './components/teacher/teacher.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./components/admin-buttons/admin-buttons.component').then(
        (m) => m.AdminButtonsComponent
      ),
  },
  { path: '', children: COURSE_ROUTES },
  { path: '', children: ENROLLMENT_ROUTES },
  { path: '', children: STUDENT_ROUTES },
  { path: '', children: TEACHER_ROUTES },
];
