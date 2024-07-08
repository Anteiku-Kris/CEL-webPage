import { Component } from '@angular/core';
import { Student} from '../../../core/models/student.model';
import { StudentService } from '../../../core/services/student.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
})
export class StudentFormComponent {
  newStudent: Student;

  constructor(private studentService: StudentService, private router: Router) {
    this.newStudent = new Student(0, '', 0, '', '', JSON.stringify([]));
  }

  register() {
    this.studentService.registerStudent(this.newStudent).subscribe(
      () => {
        console.log('Student registered succesfully');
        this.newStudent = new Student(0, '', 0, '', '', JSON.stringify([]));
        this.router.navigate(['/student-login']);
      },
      (error) => {
        console.error('Error, couldnt register student');
      }
    );
  }
}