import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification/notification-service.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private route: Router, private alertService: NotificationService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status == 401) {
          this.alertService.popUpAlert('Error', 'Invalid Credentials', 'error', false, 'Ok', undefined, undefined)
          this.route.navigateByUrl('/login')
          localStorage.clear()
        }
        if (err.status == 404) {
          this.alertService.popUpAlert('Error', 'Something went wrong', 'error', false, 'Ok', undefined, undefined)
        }
        if (err.status == 500) {
          this.alertService.popUpAlert('Error', 'Something went wrong, try again later', 'error', false, 'Ok', undefined, undefined)
        }
        if (err.status == 0) {
          this.alertService.popUpAlert('Error', 'Check your internet connection', 'error', false, 'Ok', undefined, undefined)
        }
        return throwError(err);
      })
    );
  }
}
