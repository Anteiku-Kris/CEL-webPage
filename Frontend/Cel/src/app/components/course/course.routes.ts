import { Routes } from "@angular/router"
import { CourseFormComponent } from "./course-form/course-form.component"
import { CourseListComponent } from "./course-list/course-list.component"
import { CourseDetailComponent } from "./course-detail/course-detail.component"

export const COURSE_ROUTES: Routes = [
    { path: 'course', component: CourseListComponent },
    { path: 'course-form', component: CourseFormComponent },
    { path: 'course-detail', component: CourseDetailComponent }
]