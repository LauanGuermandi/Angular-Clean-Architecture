import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StudentRepository } from './../../../../core/repositories/student.repository';
import { StudentMockMapper } from './student-mock.mapper'
import { StudentModel } from 'src/app/core/domain/student.model';
import { StudentMockEntity } from './student-mock.entity';

@Injectable({
  providedIn: 'root'
})

export class StudentMockRepository extends StudentRepository {
  private mapper = new StudentMockMapper();

  students = []

  constructor(studentsList: StudentMockEntity[] = []) {
    super();
    this.students = studentsList;
  }
 
  // Obtém todos os alunos
  public getAllStudents(): Observable<StudentMockEntity> {
    return from(this.students)
      .pipe(map(this.mapper.mapTo));
  }
}
