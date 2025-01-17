import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-admin-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent {
  email: string = '';
  password: string = '';

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  register() {
    this.adminService.registerAdmin(this.email, this.password).subscribe(
      response => {
        console.log('Admin registered successfully', response);
        this.router.navigate(['/admin-login']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
