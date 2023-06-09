import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private userData = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { 
    this.loadUserData();
  }

  loadUserData() {
    this.http.get('http://172.25.6.208:8002/api/users/').subscribe(data => {
      this.userData.next(data);
    });
  }

  getSharedUserData() {
    return this.userData.asObservable();
  }
}
