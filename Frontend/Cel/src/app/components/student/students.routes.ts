import { Routes } from "@angular/router";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { StudentListComponent } from "./student-list/student-list.component";


export const STUDENT_ROUTES: Routes = [
    { path: 'student-detail', component: StudentDetailComponent },
    { path: 'student-form', component: StudentFormComponent },
    { path: 'student-list', component: StudentListComponent },
]