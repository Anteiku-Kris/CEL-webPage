import { Router, Routes } from "@angular/router";
import { EnrollmentDetailComponent } from "./enrollment-detail/enrollment-detail.component";
import { EnrollmentFormComponent } from "./enrollment-form/enrollment-form.component";
import { EnrollmentListComponent } from "./enrollment-list/enrollment-list.component";

export const ENROLLMENT_ROUTES: Routes = [
    { path: 'enrollment-detail', component: EnrollmentDetailComponent },
    { path: 'enrollment-form', component: EnrollmentFormComponent },
    { path: 'enrollment-list', component: EnrollmentListComponent }
]