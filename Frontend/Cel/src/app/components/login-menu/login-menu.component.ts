import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-menu',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  templateUrl: './login-menu.component.html',
  styleUrl: './login-menu.component.css'
})
export class LoginMenuComponent {

}