import { SendInvitationComponent } from './../pages/organisations/send-invitation/send-invitation.component';
import { HttpClientModule ,HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl:string = "http://192.168.1.63:8002/users/"
  private refreshUrl:string = "http://192.168.1.63:8002/api/token/refresh/"
  private readonly TOKEN_KEY = 'myapp_token';
  private readonly REFRESH_KEY = 'refresh_token'
  constructor(private http : HttpClient, private cookieService:CookieService) {}

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    const data = { 'refresh': refreshToken };
    return this.http.post<any>(this.refreshUrl, data);
  }
  

  logout(): void {
    this.cookieService.delete(this.TOKEN_KEY);
    this.cookieService.delete(this.REFRESH_KEY);
    this.http.post('http://192.168.1.63:8002/api/logout/',{});
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
  deletetoken(){}
  getme(){
    return this.http.get<any>('http://192.168.1.63:8002/api/users/');
  }
  getuser(id : any ){
    return this.http.get<any>(`http://192.168.1.63:8002/api/users/${id}`)
  }
  updateUser(data :any){
    return this.http.put<any>('http://192.168.1.63:8002/api/update/',data)
  }
      signup(userObj:any){
        return this.http.post<any>('http://192.168.1.63:8002/api/users/',userObj);
      }
      loginfn(loginObj:any){
        
        return this.http.post<any>('http://192.168.1.63:8002/api/login/',loginObj,);
        }
        isLoggedIn(): boolean {
          return !!this.cookieService.get(this.TOKEN_KEY);
        }
      
      // Organisation Services  :) 
      getOrganisation(){
        return this.http.get<any>('http://192.168.1.63:8002/api/organisation/create/');
      }
      getusers(){
        return this.http.get<any>('http://192.168.1.63:8002/api/organisation/users/');
      }
      joincompany(data :any){
        return this.http.post<any>('http://192.168.1.63:8002/api/request/create/',data)
      }

      createcompany(data:any){
        return this.http.post<any>('http://192.168.1.63:8002/api/organisation/create/',data)
      }
      timestampp(){
        return this.http.get<any>('http://192.168.1.63:8001/api/getrequests/')
      }
      getrequests(){
        return this.http.get<any>('http://192.168.1.63:8002/api/request/create/')
      }
      getinvitations(){
        return this.http.get<any>('http://192.168.1.63:8002/api/invitation/create/');
      }
      deleteInvitation(id : any){
        const url = `http://192.168.1.63:8002/api/invitation/delete/${id}/`;
        return  this.http.delete<any>(url);
      }
      deleterequest(id : any){
        const url = `http://192.168.1.63:8002/api/request/delete/${id}/`;
        return  this.http.delete<any>(url);
      }
      
      acceptRequest(id : any){
        const data = { 'request_status' : 'Accepted'}
        const url = `http://192.168.1.63:8002/api/request/update/${id}/`
        return this.http.put<any>(url,data)
      } 
      acceptInvitation(id : any ){
        const data = { 'request_status' : 'Accepted'}
        const url = `http://192.168.1.63:8002/api/invitation/update/${id}/`
        return this.http.put<any>(url,data)
      }
      RejectedRequest(id : any){
        const data = { 'request_status' : 'Rejected'}
        const url = `http://192.168.1.63:8002/api/request/update/${id}/`
        return this.http.put<any>(url,data)
      } 
      RejectedInvitation(id : any ){
        const data = { 'request_status' : 'Rejected'}
        const url = `http://192.168.1.63:8002/api/invitation/update/${id}/`
        return this.http.put<any>(url,data)
      }
      sendinvitation(form : any ){
        return this.http.post<any>('http://192.168.1.63:8002/api/invitation/create/',form)
      }


  }

   

