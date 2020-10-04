
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { StudentModel } from 'src/app/core/domain/student.model';

import { StudentRepository } from 'src/app/core/repositories/student.repository';
import { environment } from 'src/environments/environment';
import { StudentWebEntity } from './student-web.entity';
import { StudentWebMapper } from './student-web.mapper';

@Injectable({
  providedIn: 'root'
})

export class StudentWebRepository extends StudentRepository {
  url = environment.apiUrl + '/students';

  constructor(private httpClient: HttpClient) {
      super();
  }

  private mapper = new StudentWebMapper();

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control':  'no-cache, no-store, must-revalidate, post- check=0, pre-check=0',
      Pragma: 'no-cache',
      Expires: '0'
     })
  };

  // Obtem todos os alunos
  getAllStudents(): Observable<StudentModel> {
    return this.httpClient
      .get<StudentWebEntity[]>(this.url)
      .pipe(flatMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }
}
