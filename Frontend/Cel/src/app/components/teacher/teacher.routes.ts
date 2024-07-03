import { Routes } from "@angular/router";
import { TeacherDetailComponent } from "./teacher-detail/teacher-detail.component";
import { TeacherFormComponent } from "./teacher-form/teacher-form.component";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";

export const TEACHER_ROUTES: Routes = [
    { path: 'teacher-detail', component: TeacherDetailComponent },
    { path: 'teacher-form', component: TeacherFormComponent },
    { path: 'teacher-list', component: TeacherListComponent }
]