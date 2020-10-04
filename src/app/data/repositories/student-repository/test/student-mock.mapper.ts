import { Mapper } from '../../../../core/base/mapper';
import { StudentMockEntity } from './student-mock.entity';
import { StudentModel } from './../../../../core/domain/student.model';

export class StudentMockMapper extends Mapper <StudentMockEntity, StudentModel> {
  mapFrom(param: StudentMockEntity): StudentModel {
    return {
      name: param.name,
      grade: param.grade
    };
  }

  mapTo(param: StudentModel): StudentMockEntity {
    return {
      id: 0,
      name: param.name,
      grade: param.grade
    };
  }
}
