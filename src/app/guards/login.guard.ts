import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanLoad,
  CanLoadFn,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  return inject(LoginService).isLoggedIn ? true: router.navigate(['/login']);
};

export const loginLoadGuard: CanLoadFn = (
  route: Route,
  segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    return inject(LoginService).isLoggedIn;
  }

