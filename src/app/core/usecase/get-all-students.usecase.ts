import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UseCase } from '../base/use-case';
import { StudentModel } from '../domain/student.model';
import { StudentWebRepository } from 'src/app/data/repositories/student-repository/student-web.repository';

@Injectable({
  providedIn: 'root'
})

export class GetAllStudentsUseCase implements UseCase<void, StudentModel> {

  constructor(private carRepository: StudentWebRepository) { }

  execute(params: void): Observable<StudentModel> {
    return this.carRepository.getAllStudents();
  }
}
