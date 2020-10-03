import { inject, TestBed } from '@angular/core/testing';
import { StudentMockRepository } from './student-mock.repository';

describe('StudentMockMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentMockRepository]
    });
  });

  it('should be created', inject([StudentMockRepository], (service: StudentMockRepository) => {
    expect(service).toBeTruthy();
  }));
});
