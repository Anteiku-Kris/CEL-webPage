import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../core/services/student.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private studentService: StudentService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.studentService.loginStudent(this.email, this.password).subscribe(
      response => {
        const { token, student } = response;
        this.authService.login(token, student);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
