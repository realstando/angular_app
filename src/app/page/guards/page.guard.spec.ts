import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { pageGuard } from './page.guard';

describe('pageGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
