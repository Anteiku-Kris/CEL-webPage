import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './core/services/student.service';
import { TeacherService } from './core/services/teacher.service';
import { EnrollmentService } from './core/services/enrollment.service';
import { CourseService } from './core/services/course.service';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [StudentService, TeacherService, EnrollmentService, CourseService],
    imports: [RouterOutlet, HttpClientModule, NavbarComponent, FormsModule]
})
export class AppComponent {
  title = 'Cel';
}
