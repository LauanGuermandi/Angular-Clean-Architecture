import { inject, TestBed } from '@angular/core/testing';
import faker from 'faker';

import { StudentMockRepository } from './student-mock.repository';
import { StudentMockEntity } from './student-mock.entity';

 // Criando um aluno com faker 
const createStudent = (): StudentMockEntity => {
  return {
    id: 0,
    name: faker.name.findName(),
    grade: faker.random.number({ min: 0, max: 10, precision: 2 })
  }
}

// Criando varios alunos
const createStudents = (numStudents = 5): StudentMockEntity[] => {
  return new Array(numStudents)
    .fill(undefined)
    .map(createStudent);
}


describe('StudentMockMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentMockRepository]
    });
  });

  it('Testando o retorno da lista de alunos', function() {
      var studentsList = createStudents()
      var studentMockRepository = new StudentMockRepository(studentsList)
      var studentsResponse = studentMockRepository.getAllStudents()
      
      var students = [];

      studentsResponse.subscribe(
        student => {
          students.push(student)
        }
      )
      
      expect(studentsList).toEqual(students);
  });
});
