export class Course {
  constructor(
    public id: number,
    public name: string,
    public level: string,
    public language: string,
    public status: 'scheduled' | 'pending' | 'canceled', // Cambia el tipo del campo status
    public schedule: string  = '[]'
  ) {}
}
