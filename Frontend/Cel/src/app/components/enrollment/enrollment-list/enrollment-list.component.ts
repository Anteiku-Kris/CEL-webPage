import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Enrollment } from '../../../core/models/enrollment.model';
import { EnrollmentService } from '../../../core/services/enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule],
  templateUrl: './enrollment-list.component.html',
  styleUrl: './enrollment-list.component.css'
})
export class EnrollmentListComponent {
enrollments: Enrollment[] = [];
  enrollment: Enrollment = {
    id: 0,
    courseId: 0,
    studentId: 0,
    enrollmentDate: new Date()
  };
  isEditing: boolean = false;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit() {
    this.loadEnrollments();
  }

  loadEnrollments() {
    this.enrollmentService.getEnrollments().subscribe((enrollments: Enrollment[]) => {
      this.enrollments = enrollments;
    });
  }

  onSubmit() {
    if (this.isEditing) {
      this.enrollmentService.updateEnrollment(this.enrollment.id, this.enrollment).subscribe(() => {
        this.resetForm();
        this.loadEnrollments();
      });
    } else {
      this.enrollmentService.createEnrollment(this.enrollment).subscribe(() => {
        this.resetForm();
        this.loadEnrollments();
      });
    }
  }

  editEnrollment(enrollment: Enrollment) {
    this.enrollment = { ...enrollment };
    this.isEditing = true;
  }

  deleteEnrollment(id: number) {
    this.enrollmentService.deleteEnrollment(id).subscribe(() => {
      this.loadEnrollments();
    });
  }

  resetForm() {
    this.enrollment = {
      id: 0,
      courseId: 0,
      studentId: 0,
      enrollmentDate: new Date()
    };
    this.isEditing = false;
  }
}
