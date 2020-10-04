
import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/core/domain/student.model';
import { GetAllStudentsUseCase } from 'src/app/core/usecase/get-all-students.usecase'


@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit{

  students: Array<StudentModel>;

  constructor(private getAllStudents: GetAllStudentsUseCase) {}

  ngOnInit() {
    this.updateStudents()
  }

  // Atualiza a variável students com todos os alunos
  updateStudents() {
    var students = [];

    this.getAllStudents.execute(null).subscribe(
      (value: StudentModel) => {
        students.push(value);
      }
    );

    this.students = students;
  }
}
