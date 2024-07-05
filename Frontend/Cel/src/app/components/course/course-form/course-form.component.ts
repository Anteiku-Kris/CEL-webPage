import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, NgIf],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent implements OnInit{
  listCourses: Course[] = [];
  newCourse: Course;
  numEdit: number | null = null;

  constructor(private CourseService: CourseService) {
    this.newCourse = new Course(
      0, '', '', '', '',
    );
  }
  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.CourseService.getCourses().subscribe((response: Course[]) => {
      this.listCourses = response;
    });
  }

  createCourse() {
    this.CourseService.createCourse(this.newCourse).subscribe(() => {
      this.getCourses();
      this.newCourse = new Course(0, '', '', '', '');
    });
  }

  editCourse(index: number) {
    this.numEdit = index;
  }

  saveCourse() {
    if (this.numEdit !== null) {
      this.CourseService.updateCourse(this.listCourses[this.numEdit]).subscribe(() => {
        this.numEdit = null;
        this.getCourses();
      });
    }
  }

  deleteCourse(index: number) {
    const id = this.listCourses[index].id;
    this.CourseService.deleteCourse(id).subscribe(() => {
      this.getCourses();
    });
  }

}
