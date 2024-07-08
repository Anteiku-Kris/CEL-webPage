export class Enrollment {
  constructor(
    public id: number,
    public courseId: number,
    public studentId: number,
    public enrollmentDate: Date,
    public courseName?: string,
    public studentName?: string,
    public teacherName?: string
  ) {}
}
