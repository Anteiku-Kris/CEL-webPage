import { Component } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { CourseService } from '../../../core/services/course.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [NgFor, FormsModule, HttpClientModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
courses: Course[] = [];
  course: Course = {
    id: 0,
    name: '',
    level: '',
    description: '',
    language: ''
  };
  isEditing: boolean = false;

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

  onSubmit() {
    if (this.isEditing) {
      this.courseService.updateCourse(this.course.id, this.course).subscribe(() => {
        console.log('Course updated', this.course);
        this.resetForm();
        this.loadCourses();
      });
    } else {
      this.courseService.createCourse(this.course).subscribe(() => {
        console.log('Course created', this.course);
        this.resetForm();
        this.loadCourses();
      });
    }
  }

  editCourse(course: Course) {
    this.course = { ...course };
    this.isEditing = true;
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(() => {
      console.log('Course deleted', id);
      this.loadCourses();
    });
  }

  resetForm() {
    this.course = {
      id: 0,
      name: '',
      level: '',
      description: '',
      language: ''
    };
    this.isEditing = false;
  }
}
