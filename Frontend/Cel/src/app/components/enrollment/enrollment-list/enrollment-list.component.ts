import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Enrollment } from '../../../core/models/enrollment.model';
import { EnrollmentService } from '../../../core/services/enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './enrollment-list.component.html',
  styleUrl: './enrollment-list.component.css'
})
export class EnrollmentListComponent {
  listEnrollments: Enrollment[] = [];
  newEnrollment: Enrollment;
  numEdit: number | null = null;

  constructor(private EnrollmentService: EnrollmentService) {
    this.newEnrollment = new Enrollment(
      0, 0, 0, new Date, 
    );
  }
  ngOnInit() {
    this.getEnrollments();
  }

  getEnrollments() {
    this.EnrollmentService.getEnrollments().subscribe((response: Enrollment[]) => {
      this.listEnrollments = response;
    });
  }

  createEnrollment() {
    this.EnrollmentService.createEnrollment(this.newEnrollment).subscribe(() => {
      this.getEnrollments();
      this.newEnrollment = new Enrollment(0, 0, 0, new Date);
    });
  }

  editEnrollment(index: number) {
    this.numEdit = index;
  }

  saveEnrollment() {
    if (this.numEdit !== null) {
      this.EnrollmentService.updateEnrollment(this.listEnrollments[this.numEdit]).subscribe(() => {
        this.numEdit = null;
        this.getEnrollments();
      });
    }
  }

  deleteEnrollment(index: number) {
    const id = this.listEnrollments[index].id;
    this.EnrollmentService.deleteEnrollment(id).subscribe(() => {
      this.getEnrollments();
    });
  }
}
