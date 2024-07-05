import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, NgIf],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  listCourses: Course[] = [];
  newCourse: Course;

  constructor(private CourseService: CourseService) {
    this.newCourse = new Course(0, '', '', '', '');
  }
  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.CourseService.getCourses().subscribe((response: Course[]) => {
      this.listCourses = response;
    });
  }
}
