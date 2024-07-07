import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ENROLLMENT_ROUTES } from './components/enrollment/enrollment.routes';
import { COURSE_ROUTES } from './components/course/course.routes';
import { STUDENT_ROUTES } from './components/student/students.routes';
import { TEACHER_ROUTES } from './components/teacher/teacher.routes';
import { WeeklyPlannerComponent } from './components/weekly-planner/weekly-planner.component';
import { StudentLoginComponent } from './components/student/student-login/student-login.component';

import { ADMIN_MANAGEMENT_ROUTES } from './components/admin-management/admin-management.routes';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';

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
  { path: '', children: ADMIN_MANAGEMENT_ROUTES },

  { path: 'planner', component: WeeklyPlannerComponent },
];
