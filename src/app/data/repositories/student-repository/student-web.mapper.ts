import { StudentModel } from 'src/app/core/domain/student.model';
import { Mapper } from '../../../core/base/mapper'
import { StudentWebEntity } from './student-web.entity';

export class StudentWebMapper extends Mapper <StudentWebEntity, StudentModel> {
  mapFrom(param: StudentWebEntity): StudentModel {
    return {
      name: param.name,
      grade: param.grade
    };
  }

  mapTo(param: StudentModel): StudentWebEntity {
    return {
      id: 0,
      name: param.name,
      grade: param.grade
    };
  }
}
