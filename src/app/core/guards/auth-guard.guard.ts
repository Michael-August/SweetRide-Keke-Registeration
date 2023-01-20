import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../services/notification/notification-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor( private router: Router, private alertService: NotificationService ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = localStorage.getItem('kekeToken')
    if (!token) {
      this.router.navigate(['/login'])
      this.alertService.popUpAlert('Error', 'You must be authenticated to access this route', 'error', false, 'Ok', undefined, undefined)
    }
    return true;
  }
  
}
