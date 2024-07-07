import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../core/models/teacher.model';
import { TeacherService } from '../../../core/services/teacher.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from '../../../core/services/course.service';
import { Course } from '../../../core/models/course.model';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css'],
})
export class TeacherFormComponent implements OnInit {
  listTeachers: Teacher[] = [];
  newTeacher: Teacher;
  numEdit: number | null = null;
  coursesOptions: string[] = [];

  constructor(
    private teacherService: TeacherService,
    private courseService: CourseService
  ) {
    this.newTeacher = new Teacher(0, '', '', '');
  }

  ngOnInit() {
    this.getTeachers();
    this.getCourses(); // Llamar al método para obtener los cursos al iniciar el componente
  }

  getTeachers() {
    this.teacherService.getTeachers().subscribe((response: Teacher[]) => {
      this.listTeachers = response;
    });
  }

  getCourses() {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.coursesOptions = courses.map((course) => course.name);
    });
  }

  createTeacher() {
    this.teacherService.createTeacher(this.newTeacher).subscribe(() => {
      this.getTeachers();
      this.newTeacher = new Teacher(0, '', '', '');
    });
  }

  editTeacher(index: number) {
    this.numEdit = index;
  }

  saveTeacher() {
    if (this.numEdit !== null) {
      this.teacherService.updateTeacher(
        this.listTeachers[this.numEdit]
      ).subscribe(() => {
        this.numEdit = null;
        this.getTeachers();
      });
    }
  }

  deleteTeacher(index: number) {
    const id = this.listTeachers[index].id;
    this.teacherService.deleteTeacher(id).subscribe(() => {
      this.getTeachers();
    });
  }
}
