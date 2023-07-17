import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard {

  constructor(private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (!this.authService.hasValidToken()) {
      this.authService.login();
      return of(false);
    }
    return of(true);
  }
}
