import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environements/env';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl: string = environment.documentUrl;

  constructor(private http: HttpClient) { }

  update(data: any, id: any): Observable<any> {
    const url = `${this.baseUrl}/documents/doc/${id}/`;
    return this.http.put<any>(url, data).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  add(data: any): Observable<any> {
    const url = `${this.baseUrl}/documents/doc/`;
    return this.http.post<any>(url, data).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  get(): Observable<any[]> {
    const url = `${this.baseUrl}/documents/doc/`;
    return this.http.get<any[]>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  delete(id: any): Observable<any> {
    const url = `${this.baseUrl}/documents/doc/${id}/`;
    return this.http.delete<any>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  requestdelete(id: any): Observable<any> {
    const url = `${this.baseUrl}/documents/requestdelete/${id}/`;
    return this.http.delete<any>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getrequests(): Observable<any> {
    const url = `${this.baseUrl}/documents/requests/`;
    return this.http.get<any>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  addrequest(data: any): Observable<any> {
    const url = `${this.baseUrl}/documents/requests/`;
    return this.http.post<any>(url, data).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  download(id: any): Observable<any> {
    const url = `${this.baseUrl}/documents/doc/${id}/download/`;
    return this.http.get<any>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
