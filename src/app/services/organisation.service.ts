import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environements/env';
@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  private baseUrl: string = `${environment.apiUrl}/api/organisation`;
  private createUrl: string = `${this.baseUrl}/create`;
  private usersUrl: string = `${this.baseUrl}/users`;
  private requestsUrl: string = `${this.baseUrl}/request`;
  private invitationsUrl: string = `${this.baseUrl}/invitation`;

  constructor(private http: HttpClient) {}

  createOrganisation(data: any): Observable<any> {
    return this.http.post<any>(this.createUrl, data, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getOrganisation(): Observable<any> {
    return this.http.get<any>(this.createUrl, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  joinCompany(data: any): Observable<any> {
    const url = `${this.baseUrl}/request/create`;
    return this.http.post<any>(url, data, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getRequests(): Observable<any> {
    return this.http.get<any>(this.requestsUrl, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  deleteRequest(id: any): Observable<any> {
    const url = `${this.requestsUrl}/delete/${id}`;
    return this.http.delete<any>(url, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  acceptRequest(id: any): Observable<any> {
    const url = `${this.requestsUrl}/update/${id}`;
    const data = { request_status: 'Accepted' };
    return this.http.put<any>(url, data, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  rejectRequest(id: any): Observable<any> {
    const url = `${this.requestsUrl}/update/${id}`;
    const data = { request_status: 'Rejected' };
    return this.http.put<any>(url, data, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getInvitations(): Observable<any> {
    return this.http.get<any>(this.invitationsUrl, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  deleteInvitation(id: any): Observable<any> {
    const url = `${this.invitationsUrl}/delete/${id}`;
    return this.http.delete<any>(url, ).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}