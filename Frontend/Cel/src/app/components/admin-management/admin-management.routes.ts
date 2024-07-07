import { Routes } from "@angular/router";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminFormComponent } from "./admin-form/admin-form.component";

export const ADMIN_MANAGEMENT_ROUTES: Routes = [
    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'admin-register', component: AdminFormComponent },
]