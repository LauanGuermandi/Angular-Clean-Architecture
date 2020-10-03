import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import faker from 'faker';

import { StudentRepository } from './../../../../core/repositories/student.repository';
import { StudentMockMapper } from './student-mock.mapper'
import { StudentModel } from 'src/app/core/domain/student.model';
import { StudentMockEntity } from './student-mock.entity';

@Injectable({
  providedIn: 'root'
})

export class StudentMockRepository extends StudentRepository {
  private mapper = new StudentMockMapper();

  // Criando um aluno com faker 
  private createStudent = (id: number): StudentMockEntity => {
    return {
      id: id,
      name: faker.name.findName(),
      grade: faker.random.number({ min: 0, max: 10, precision: 2 })
    }
  }

  // Criando varios alunos
  private createStudents = (numStudents = 5): StudentMockEntity[] => {
    return new Array(numStudents)
      .fill(undefined)
      .map(this.createStudent);
  }

  private students = this.createStudents()

  // Obtém todos os alunos
  public getAllStudents(): Observable<StudentModel> {
    return from(this.students)
      .pipe(map(this.mapper.mapFrom));
  }
}
