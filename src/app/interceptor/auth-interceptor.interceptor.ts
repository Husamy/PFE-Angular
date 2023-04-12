import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private auth : AuthService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.auth.getToken();
    if (authToken) {
      request = this.addToken(request, authToken);
    }
    return next.handle(request).pipe(
      catchError((error) => {
        // Check if the error is 401 Unauthorized
        if (error.status === 401) {
          // Try refreshing the access token
          return this.auth.refreshToken().pipe(
            switchMap((newToken) => {
              // Retry the request with the new access token
              request = this.addToken(request, newToken);
              return next.handle(request);
            }),
            catchError((refreshError) => {
              // If refreshing the token fails, log the user out
              this.auth.logout();
              return throwError(refreshError);
            })
          );
        }
        // For other errors, re-throw the error
        return throwError(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
