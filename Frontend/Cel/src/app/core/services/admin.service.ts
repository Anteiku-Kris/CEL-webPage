import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class AdminService {
    private apiUrl = environment.apiUrl + '/admins';
  
    constructor(private http: HttpClient) { }
  
    registerAdmin(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/register`, { email, password });
    }
  
    loginAdmin(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
    }
  }