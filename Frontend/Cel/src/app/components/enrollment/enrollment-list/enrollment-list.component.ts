import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; // Añadir OnInit
import { FormsModule } from '@angular/forms';
import { Enrollment } from '../../../core/models/enrollment.model';
import { EnrollmentService } from '../../../core/services/enrollment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment-list',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css'],
})
export class EnrollmentListComponent implements OnInit {
  listEnrollments: Enrollment[] = [];
  numEdit: number | null = null;

  constructor(
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEnrollments();
  }

  getEnrollments() {
    this.enrollmentService
      .getEnrollments()
      .subscribe((response: Enrollment[]) => {
        this.listEnrollments = response;
      });
  }

  approveEnrollment(enrollment: Enrollment) {
    this.enrollmentService.approveEnrollment(enrollment.id).subscribe(() => {
      this.getEnrollments();
      alert('Solicitud aprobada');
    });
  }

  rejectEnrollment(enrollment: Enrollment) {
    this.enrollmentService.rejectEnrollment(enrollment.id).subscribe(() => {
      this.getEnrollments();
      alert('Solicitud denegada');
    });
  }

}
