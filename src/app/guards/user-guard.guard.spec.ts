import {TestBed} from '@angular/core/testing';

import {UserGuardGuard} from './user-guard.guard';
import {RouterTestingModule} from "@angular/router/testing";

describe('UserGuardGuard', () => {
  let guard: UserGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(UserGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
