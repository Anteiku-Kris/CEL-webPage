import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enrollment } from '../../../core/models/enrollment.model';
import { EnrollmentService } from '../../../core/services/enrollment.service';

@Component({
  selector: 'app-enrollment-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './enrollment-detail.component.html',
  styleUrls: ['./enrollment-detail.component.css'],
})
export class EnrollmentDetailComponent implements OnInit {
  enrollment: Enrollment | null = null;

  constructor(
    private enrollmentService: EnrollmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.enrollmentService.getEnrollment(id).subscribe((enrollment: Enrollment) => {
      this.enrollment = enrollment;
    });
  }
}
