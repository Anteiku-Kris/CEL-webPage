import { Component } from '@angular/core';
import { Teacher } from '../../../core/models/teacher.model';
import { TeacherService } from '../../../core/services/teacher.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {
  teachers: Teacher[] = [];
  teacher: Teacher = {
    id: 0,
    name: '',
    email: '',
    courses: '',
  };
  isEditing: boolean = false;

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.teacherService.getTeachers().subscribe((teachers: Teacher[]) => {
      this.teachers = teachers;
    });
  }

  onSubmit() {
    if (this.isEditing) {
      this.teacherService.updateTeacher(this.teacher.id, this.teacher).subscribe(() => {
        this.resetForm();
        this.loadTeachers();
      });
    } else {
      this.teacherService.createTeacher(this.teacher).subscribe(() => {
        this.resetForm();
        this.loadTeachers();
      });
    }
  }

  editTeacher(teacher: Teacher) {
    this.teacher = { ...teacher };
    this.isEditing = true;
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(() => {
      this.loadTeachers();
    });
  }

  resetForm() {
    this.teacher = {
      id: 0,
      name: '',
      email: '',
      courses: '',
    };
    this.isEditing = false;
  }
}
