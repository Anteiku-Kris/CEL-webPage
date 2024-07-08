import { Component, OnInit } from '@angular/core';
import { Course } from '../../core/models/course.model';
import { CourseService } from '../../core/services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-weekly-planner',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './weekly-planner.component.html',
  styleUrl: './weekly-planner.component.css'
})
export class WeeklyPlannerComponent implements OnInit{
  courses: Course[] = [];
  selectedCourseId: number | null = null;
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  getCoursesForDay(day: string): { course: Course, time: string }[] {
    return this.courses
      .filter(course => {
        if (this.selectedCourseId !== null && course.id !== this.selectedCourseId) {
          return false;
        }
        const schedule = JSON.parse(course.schedule);
        return schedule.some((s: { day: string; }) => s.day === day);
      })
      .map(course => {
        const schedule = JSON.parse(course.schedule);
        const daySchedule = schedule.find((s: { day: string; }) => s.day === day);
        return { course, time: `${daySchedule.startTime} - ${daySchedule.endTime}` };
      });
  }

  downloadPDF(): void {
    const data = document.getElementById('weekly-planner');
    html2canvas(data!).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const doc = new jsPDF('p', 'mm', 'a4');
      const position = 0;

      doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      doc.save('horario-cel.pdf');
    });
  }
}
