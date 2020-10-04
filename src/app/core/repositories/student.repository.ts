import { Observable } from 'rxjs';
import { StudentModel } from './../domain/student.model';

export abstract class StudentRepository {
  abstract getAllStudents(): Observable<StudentModel>;
}
