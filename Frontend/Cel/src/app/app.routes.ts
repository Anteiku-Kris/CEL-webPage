import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ENROLLMENT_ROUTES } from './components/enrollment/enrollment.routes';
import { COURSE_ROUTES } from './components/course/course.routes';
import { STUDENT_ROUTES } from './components/student/students.routes';
import { TEACHER_ROUTES } from './components/teacher/teacher.routes';
import { AdminButtonsComponent } from './components/admin-buttons/admin-buttons.component';
import { TeacherFormComponent } from './components/teacher/teacher-form/teacher-form.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { EnrollmentListComponent } from './components/enrollment/enrollment-list/enrollment-list.component';
import { TeacherListComponent } from './components/teacher/teacher-list/teacher-list.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { WeeklyPlannerComponent } from './components/weekly-planner/weekly-planner.component';

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

  { path: 'planner', component: WeeklyPlannerComponent },
  /*
  { path: 'admin', component: AdminButtonsComponent },
  { path: 'admin/new_course', component: CourseFormComponent },
  { path: 'admin/new_teacher', component: TeacherFormComponent },
  { path: 'admin/list/courses', component: CourseListComponent },
  { path: 'admin/list/teachers', component: TeacherListComponent },
  { path: 'admin/list/enrollments', component: EnrollmentListComponent },

  { path: 'course/detail', component: CourseDetailComponent },
   */
];
