import { Component } from '@angular/core';
import { Student} from '../../../core/models/student.model';
import { StudentService } from '../../../core/services/student.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
})
export class StudentFormComponent {
  newStudent: Student;

  constructor(private studentService: StudentService) {
    this.newStudent = new Student(0, '', 0, '', '', JSON.stringify([]));
  }

  register() {
    this.studentService.registerStudent(this.newStudent).subscribe(
      () => {
        console.log('Student registered succesfully');
        this.newStudent = new Student(0, '', 0, '', '', JSON.stringify([]));
      },
      (error) => {
        console.error('Error, couldnt register student');
      }
    );
  }
}
