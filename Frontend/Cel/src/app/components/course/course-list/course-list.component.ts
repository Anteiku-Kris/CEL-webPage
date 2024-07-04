import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Course[] = [];
  course: Course = {
    id: 0,
    name: '',
    level: '',
    description: '',
    language: ''
  };

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    console.log('CoursesComponent initialized');
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
      console.log('Courses loaded', courses);
    });
  }

}
