import { Component } from '@angular/core';
import { Teacher } from '../../../core/models/teacher.model';
import { TeacherService } from '../../../core/services/teacher.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {
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

  createTeacher() {
    this.TeacherService.createTeacher(this.newTeacher).subscribe(() => {
      this.getTeachers();
      this.newTeacher = new Teacher(0, '', '', '');
    });
  }

  editTeacher(index: number) {
    this.numEdit = index;
  }

  saveTeacher() {
    if (this.numEdit !== null) {
      this.TeacherService.updateTeacher(this.listTeachers[this.numEdit]).subscribe(() => {
        this.numEdit = null;
        this.getTeachers();
      });
    }
  }

  deleteCourse(index: number) {
    const id = this.listTeachers[index].id;
    this.TeacherService.deleteTeacher(id).subscribe(() => {
      this.getTeachers();
    });
  }
}
