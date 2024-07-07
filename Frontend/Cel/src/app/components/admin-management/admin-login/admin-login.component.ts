import { Component } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.adminService.loginAdmin(this.email, this.password).subscribe(
      response => {
        const { token, admin } = response;
        this.authService.login(token, admin);
        this.router.navigate(['/admin']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
