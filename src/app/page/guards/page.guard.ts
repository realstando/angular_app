import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../../login/login.service';
import { inject } from '@angular/core';

export const pageGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(LoginService).isAdmin;
};
