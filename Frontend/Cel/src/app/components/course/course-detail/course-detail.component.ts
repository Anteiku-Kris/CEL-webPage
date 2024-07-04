import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
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
