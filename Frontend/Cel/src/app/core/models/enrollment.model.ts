export class Enrollment {
  constructor(
    public id: number,
    public courseId: number,
    public studentId: number,
    public enrollmentDate: Date,
  ){}
}