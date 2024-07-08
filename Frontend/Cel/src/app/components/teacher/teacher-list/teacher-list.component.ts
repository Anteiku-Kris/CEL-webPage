import { Component } from '@angular/core';
import { Teacher } from '../../../core/models/teacher.model';
import { TeacherService } from '../../../core/services/teacher.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {
  listTeachers: Teacher[] = [];
  newTeacher: Teacher;
  numEdit: number | null = null;

  constructor(private TeacherService: TeacherService) {
    this.newTeacher = new Teacher(
      0, '', '', '', 
    );
  }
  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.TeacherService.getTeachers().subscribe((response: Teacher[]) => {
      this.listTeachers = response;
    });
  }
}
