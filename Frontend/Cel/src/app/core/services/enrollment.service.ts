import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../models/enrollment.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = environment.apiUrl + '/enrollments';

  constructor(private http: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl);
  }

  getEnrollment(id: number): Observable<Enrollment> {
    return this.http.get<Enrollment>(`${this.apiUrl}/${id}`);
  }

  createEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.post<Enrollment>(this.apiUrl, enrollment);
  }

  updateEnrollment(enrollment: Enrollment): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${enrollment.id}`, enrollment);
  }

  deleteEnrollment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  approveEnrollment(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/approve`, {});
  }

  rejectEnrollment(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/reject`, {});
  }
}
