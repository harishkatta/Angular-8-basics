import { TestBed, async, inject } from '@angular/core/testing';

import { DepartmentChildrenGuard } from './department-children.guard';

describe('DepartmentChildrenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentChildrenGuard]
    });
  });

  it('should ...', inject([DepartmentChildrenGuard], (guard: DepartmentChildrenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
