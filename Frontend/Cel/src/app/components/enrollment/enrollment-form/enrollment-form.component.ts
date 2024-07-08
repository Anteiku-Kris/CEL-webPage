import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../../../core/models/enrollment.model';
import { EnrollmentService } from '../../../core/services/enrollment.service';
import { CourseService } from '../../../core/services/course.service';
import { AuthService } from '../../../core/services/auth.service';
import { Course } from '../../../core/models/course.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css'],
})
export class EnrollmentFormComponent implements OnInit {
  enrollments: Enrollment[] = [];
  courses: Course[] = [];
  enrollment: Enrollment = {
    id: 0,
    courseId: 0,
    studentId: 0,
    enrollmentDate: new Date(),
  };
  enrollmentDateFormatted: string = '';
  isEditing: boolean = false;
  selectedCourseName: string = '';
  studentId: number = 0;

  constructor(
    private enrollmentService: EnrollmentService,
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadCourses();
    this.studentId = this.authService.getStudentId();
    this.enrollment.studentId = this.studentId;
    this.enrollment.enrollmentDate = new Date(); // Initialize with today's date
    this.enrollmentDateFormatted = this.formatDate(this.enrollment.enrollmentDate);
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }

  onCourseChange() {
    const selectedCourse = this.courses.find(
      (course) => course.id === this.enrollment.courseId
    );
    this.selectedCourseName = selectedCourse ? selectedCourse.name : '';
  }

  onSubmit() {
    this.enrollment.enrollmentDate = new Date(this.enrollmentDateFormatted);
    this.enrollmentService.createEnrollment(this.enrollment).subscribe(
      (response) => {
        this.resetForm();
        alert('Su solicitud fue enviada al administrador.');
      },
      (error) => {
        console.error('Error creating enrollment:', error);
        alert('Hubo un error al enviar su solicitud.');
      }
    );
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2); // Adds leading zero if needed
    const day = ('0' + d.getDate()).slice(-2); // Adds leading zero if needed
    return `${year}-${month}-${day}`;
  }

  resetForm() {
    this.enrollment = {
      id: 0,
      courseId: 0,
      studentId: this.studentId,
      enrollmentDate: new Date(),
    };
    this.enrollmentDateFormatted = this.formatDate(this.enrollment.enrollmentDate);
    this.selectedCourseName = '';
  }
}
