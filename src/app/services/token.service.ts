import { environment } from './../../environements/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseurl = environment.apiUrl + '/users/';
  private readonly refreshUrl = environment.apiUrl + '/api/token/refresh/';
  private readonly TOKEN_KEY = 'myapp_token';
  private readonly REFRESH_KEY = 'refresh_token';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    const data = { 'refresh': refreshToken };
    return this.http.post<any>(this.refreshUrl, data).pipe(
      map((response) => {
        this.setAccessToken(response.access);
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  logout(): Observable<any> {
    this.cookieService.delete(this.TOKEN_KEY);
    this.cookieService.delete(this.REFRESH_KEY);
    return this.http.post(environment.apiUrl + '/api/logout/', {}).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getToken(): string {
    return this.cookieService.get(this.TOKEN_KEY);
  }

  setAccessToken(token: string): void {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (60 * 60 * 1000));
    this.cookieService.set(this.TOKEN_KEY, token, expirationDate, '/', '', true, 'Strict');
  }

  getRefreshToken(): string {
    return this.cookieService.get(this.REFRESH_KEY);
  }

  setRefreshToken(token: string): void {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (30 * 24 * 60 * 60 * 1000));
    this.cookieService.set(this.REFRESH_KEY, token, expirationDate, '/', '', true, 'Strict');
  }

  deleteToken() {
    this.cookieService.delete(this.TOKEN_KEY);
    this.cookieService.delete(this.REFRESH_KEY);
  }

  getMe(): Observable<any> {
    return this.http.get<any>(this.baseurl).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getUser(id: any): Observable<any> {
    const url = `${this.baseurl}${id}/`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  updateUser(data: any): Observable<any> {
    const url = `${environment.apiUrl}/api/update/`;
    return this.http.put<any>(url, data).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  signup(userObj: any): Observable<any> {
    const url = `${this.baseurl}`;
    return this.http.post<any>(url, userObj).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  loginfn(loginObj: any): Observable<any> {
    const url = `${environment.apiUrl}/api/login/`;
    return this.http.post<any>(url, loginObj).pipe(
      map((response) => {
        this.setAccessToken(response.access);
        this.setRefreshToken(response.refresh);
        return response;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!this.cookieService.get(this.TOKEN_KEY);
  }
}
