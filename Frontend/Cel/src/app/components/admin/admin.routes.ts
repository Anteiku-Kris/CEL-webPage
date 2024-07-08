import { Routes } from "@angular/router";
import { AdminButtonsComponent } from "./admin-buttons/admin-buttons.component";
import { AdminFormComponent } from "./admin-form/admin-form.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";

export const ADMIN_ROUTES: Routes = [
  { path: 'admin-buttons', component: AdminButtonsComponent },
  { path: 'admin-form', component: AdminFormComponent },
  { path: 'admin-login', component: AdminLoginComponent }
];
